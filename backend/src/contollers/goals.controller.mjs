import {PrismaClient} from "@prisma/client"

const prisma = new PrismaClient()

//*************** get all goals******************

export const allGoals = async(req, res) => {
    const goals = await prisma.goals.findMany()

    res.send(goals)
}