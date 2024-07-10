import { PrismaClient } from "@prisma/client";
import { validationResult, } from "express-validator";

const prisma = new PrismaClient();

//************geting all workout logs */

export const getAllWorkoutLogs = async (req, res) => {
  const allworkoutLogs = await prisma.workouts.findMany();

  res.send(allworkoutLogs);
};

//***********************Workout Logging ***************/

export const LogWorkout = async (req, res) => {
  const { userId, type, duration, intensity, notes } = req.body;
  const parsedDurations = parseInt(duration)


  try {
    const workout = await prisma.workouts.create({
      data: {
        type: type,
        duration: parsedDurations,
        intensity: intensity,
        notes: notes,
        users: {
          connect: {
            user_id: userId
          },
        },
      },
    });

    res.status(201).json({message: "Log sucessfull", data:workout }, )
  } catch (error) {
    console.log("Log unsuccessfull")
    res.send(error)
  }
};
