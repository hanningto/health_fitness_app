import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

//*************** get all goals******************

export const allGoals = async (req, res) => {
  const goals = await prisma.goals.findMany();

  res.send(goals);
};
//****************************Set Goal */
export const setGoal = async (req, res) => {
  const { user_id, goal_type, target_value, start_date, end_date } = req.body;

  try {
    const newGoal = await prisma.goals.create({
      data: {
        user_id: user_id,
        goal_type: goal_type,
        target_value: target_value,
        start_date: new Date(start_date),
        end_date: new Date(end_date),
      },
    });
    res.status(201).json(newGoal);
  } catch (error) {
    res.status(500).json({ error: "Error setting goal" });
  }
};


//***********************Update goal

export const updateGoal = async(req, res) => {
    const { goalId } = req.params;
  const { goal_type, target_value, start_date, end_date } = req.body;

  try {
    const updatedGoal = await prisma.goals.update({
      where: { goal_id: parseInt(goalId) },
      data: {
        goal_type: goal_type,
        target_value: target_value,
        start_date: new Date(start_date),
        end_date: new Date(end_date),
      },
    });
    res.status(200).json(updatedGoal);
  } catch (error) {
    res.status(500).json({ error: 'Error updating goal' });
  }
}
//****************************delete goal */
export const deleteGoal= async(req, res) => {
    const { goalId } = req.params;

    try {
      await prisma.goals.delete({
        where: { goal_id: parseInt(goalId) },
      });
      res.status(200).json({ message: 'Goal deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Error deleting goal' });
    }
}