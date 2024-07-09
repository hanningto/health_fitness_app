import { PrismaClient } from "@prisma/client";
import { validationResult, } from "express-validator";

const prisma = new PrismaClient();

//************geting all workout logs */

export const getAllWorkoutLogs = async (req, res) => {
  const allworkoutLogs = await prisma.workouts.findMany();

  res.send(allworkoutLogs);
};

//***********************Logging ***************/

export const LogWorkout = async (req, res) => {
  const { user_id, type, duration, intensity, notes } = req.body;

  try {
    const workout = await prisma.workouts.create({
      data: {
        type: type,
        duration: duration,
        intensity: intensity,
        notes: notes,
        users: {
          connect: {
            user_id: user_id,
          },
        },
      },
    });

    res.status(201).json({message: "Log sucessfull", data:workout }, )
  } catch (error) {
    res.send(error)
  }
};
