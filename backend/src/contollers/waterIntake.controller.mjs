import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createWaterIntake = async (req, res) => {
  const { userId, intakeDate, intakeAmount } = req.body;

  try {
    const waterIntake = await prisma.water_intake.create({
      data: {
        user_id: userId,
        intake_date: new Date(intakeDate),
        intake_amount: intakeAmount,
      },
    });
    res.status(201).json(waterIntake);
  } catch (error) {
    console.error('Error creating water intake:', error);
    res.status(500).json({ error: 'Error creating water intake' });
  }
};

export const getWaterIntake = async (req, res) => {
  const { userId } = req.params;

  try {
    const waterIntakeLogs = await prisma.water_intake.findMany({
      where: { user_id: parseInt(userId) },
      orderBy: { intake_date: 'desc' },
    });
    res.status(200).json(waterIntakeLogs);
  } catch (error) {
    console.error('Error retrieving water intake logs:', error);
    res.status(500).json({ error: 'Error retrieving water intake logs' });
  }
};

export const waterIntake = async(req, res) => {
  try {
    const intake = await prisma.water_intake.findMany()

    res.send(intake)
  } catch (error) {
    
  }
}


export const deleteWaterLog = async(req, res) => {
  const {params : {id}} = req
  try {
    await prisma.water_intake.delete({
      where: {
        intake_id: parseInt(id)
      }
    })
    res.status(200).json({message: "Log Deleted Successfully"})
  } catch (error) {
    res.status(500).json({error: "unable to delete Log"})
  }
}