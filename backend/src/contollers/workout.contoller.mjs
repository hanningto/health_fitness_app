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
//***********deleting workout
export const deleteWorkout = async(req, res) => {
  const {params: {id}} = req
  try {
    await prisma.workouts.delete({
      where: {
        workout_id: parseInt(id)
      }
    })

    res.status(200).json({message: "Workout deleted Successfully"})
  } catch (error) {
    res.status(500).json({error: "Unable to delete Workout"})
  }
}

//*********************updating a workout */

export const updateWorkout = async(req, res) => {
  const {params: {id}} = req
  const {type, intensity, duration, notes} = req.body
  try {
    const updatedWorkout = await prisma.workouts.update({
      where: {
        workout_id: parseInt(id)
      },
      data: {
        type: type,
        intensity: intensity,
        duration: duration,
        notes: notes
      }
    })
    res.status(200).json({message: "Workout Update Successfull", data: updatedWorkout})
  } catch (error) {
    res.status(500).json({error: "Unable to update workout"})
    console.log(error)
  }
}