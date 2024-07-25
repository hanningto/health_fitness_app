import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createSleepLog = async (req, res) => {
  const { user_id, sleep_date, sleep_duration, notes } = req.body;
console.log(req.body)
  try {
    const sleepLog = await prisma.sleep_logs.create({
      data: {
        user_id: user_id,
        sleep_date: new Date(sleep_date),
        sleep_duration: sleep_duration,
        notes,
      },
    });
    console.log("sleep log successfull")
    res.status(201).json(sleepLog);
  } catch (error) {
    console.error('Error creating sleep log:', error);
    res.status(500).json({ error: 'Error creating sleep log' });
  }
};

export const getSleepLogs = async (req, res) => {
  const { userId } = req.params;

  try {
    const sleepLogs = await prisma.sleep_logs.findMany();
    res.status(200).json(sleepLogs);
  } catch (error) {
    console.error('Error retrieving sleep logs:', error);
    res.status(500).json({ error: 'Error retrieving sleep logs' });
  }
};

//***********************delete sleep log */

export const deleteSleep = async(req, res) => {
  const {params : {id}}= req

  try {
    await prisma.sleep_logs.delete({
      where: {
        sleep_id: parseInt(id)
      }
    })

    res.status(200).json({message: "Sleep Log deleted successfully"})
  } catch (error) {
    res.status(500).json({error: "Unable to Delete sleep log"})
  }
}