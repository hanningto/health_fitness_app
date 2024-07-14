import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()


export const calculateGoalProgress = async (goalId) => {
    const goal = await prisma.goals.findUnique({
      where: {
        goal_id: goalId,
      },
      include: {
        progress: true,
      },
    });
  
    if (!goal) {
      throw new Error("Goal not found");
    }
  
    const totalProgress = goal.progress.reduce((acc, curr) => acc + curr.progress_value, 0);
    const progressPercentage = (totalProgress / goal.target_value) * 100;
    
    console.log(progressPercentage)  
    return progressPercentage;
  };