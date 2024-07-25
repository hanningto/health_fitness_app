import { PrismaClient } from "@prisma/client";
import { calculateGoalProgress } from "../utils/helperFuntions/progressCalculator.mjs";

const prisma = new PrismaClient();

//*************************goal culculation */

export const progressCalculation = async (req, res) => {
  const { goal_id } = req.body;
  try {
    const goalDetails = await prisma.goals.findFirst({
      where: {
        goal_id: goal_id,
      },
    });
    const goalType = goalDetails.goal_type;
    const goalTarget = goalDetails.target_value;

    const progressPercentage = await calculateGoalProgress(goal_id);
    console.log(`Current Progress is at ${progressPercentage}%`);
    res
      .status(200)
      .json({
        goalType: goalType,
        goalTarget: goalTarget,
        percentage: progressPercentage,
      });
  } catch (error) {
    console.log("failed to calcutae progress");
    res.status(500).json({error:"failed to calcutae progress" })

  }
};


//*********************fetch goal progress details */

export const progress = async(req, res) => {
    const {userId} = req.body;

  try {
    const goals = await prisma.goals.findMany({
      where: {
        user_id: userId,
      },
      include: {
        progress: true,
      },
    });

    const progressData = goals.map((goal) => {
      const totalProgress = goal.progress.reduce((acc, curr) => acc + curr.progress_value, 0);
      return {
        goal_id: goal.goal_id,
        goal_type: goal.goal_type,
        target_value: goal.target_value,
        current_progress: totalProgress,
      };
    });

    res.status(200).json(progressData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export const singleprogress = async (req, res) => {
  const { params: { id } } = req;

  try {
    const goal = await prisma.goals.findUnique({
      where: {
        goal_id: parseInt(id),
      },
      include: {
        progress: true,
      },
    });

    if (!goal) {
      return res.status(404).json({ error: "Goal not found" });
    }

    const totalProgress = goal.progress.reduce((acc, curr) => acc + curr.progress_value, 0);

    const progressData = {
      goal_id: goal.goal_id,
      goal_type: goal.goal_type,
      target_value: goal.target_value,
      current_progress: totalProgress,
    };

    res.status(200).json(progressData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
