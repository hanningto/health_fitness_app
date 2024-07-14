import { PrismaClient } from "@prisma/client";
import { calculateGoalProgress } from "../utils/helperFuntions/progressCalculator.mjs";

const prisma = new PrismaClient();

//***********GET every progress */

export const allProgresses = async (req, res) => {
  const progress = await prisma.progress.findMany();
  console.log(progress);
  res.send(progress);
};
//********************Log progress */

export const logProgress = async(req, res) => {
  const { user_id, goal_id, progress_date, progress_value } = req.body;

  try {
    const newProgress = await prisma.progress.create({
      data: {
        user_id,
        goal_id,
        progress_date: new Date(progress_date),
        progress_value,
      },
    });
    res.status(201).json(newProgress);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


