import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

//*********************get all activites */

export const allActivities = async (req, res) => {

    const {params: {id}} = req
    const parsedId = parseInt(id)
  const activites = await prisma.users.findFirst({
    where: {
      user_id: parsedId,
    },
    include: {
      goals: true,
      workouts: true,
      sleep_logs: true,
      meals: true,
      water_intake: true,
      progress: true
    },
  });
  res.send(activites);
};

//********************fetching users progress */

