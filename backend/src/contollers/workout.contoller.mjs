import { PrismaClient } from "@prisma/client";

const prisma  = new PrismaClient()

//************geting all workout logs */

export const getAllWorkoutLogs = async(req, res) => {
    const allworkoutLogs = await prisma.workouts.findMany()

    res.send(allworkoutLogs)
}