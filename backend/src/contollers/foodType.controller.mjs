import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createFoodType = async (req, res) => {
  const { name, description } = req.body;

  try {
    const foodType = await prisma.food_types.create({
      data: {
        name,
        description,
      },
    });
    res.status(201).json(foodType);
  } catch (error) {
    console.error('Error creating food type:', error);
    res.status(500).json({ error: 'Error creating food type' });
  }
};

export const getFoodTypes = async (req, res) => {
  try {
    const foodTypes = await prisma.food_types.findMany();
    res.status(200).json(foodTypes);
  } catch (error) {
    console.error('Error retrieving food types:', error);
    res.status(500).json({ error: 'Error retrieving food types' });
  }
};
