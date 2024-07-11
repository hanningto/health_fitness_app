import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createMeal = async (req, res) => {
  const { userId, mealDate, mealTime, foodType, calories, notes } = req.body;

  try {
    const meal = await prisma.meals.create({
      data: {
        user_id: userId,
        meal_date: new Date(mealDate),
        meal_time: mealTime,
        food_type: foodType,
        calories,
        notes,
      },
    });
    res.status(201).json(meal);
  } catch (error) {
    console.error('Error creating meal:', error);
    res.status(500).json({ error: 'Error creating meal' });
  }
};


export const getMeals = async (req, res) => {
  const { userId } = req.params;

  try {
    const meals = await prisma.meals.findMany({
      where: { user_id: parseInt(userId) },
      orderBy: { meal_date: 'desc' },
    });
    res.status(200).json(meals);
  } catch (error) {
    console.error('Error retrieving meals:', error);
    res.status(500).json({ error: 'Error retrieving meals' });
  }
};

export const allMeals = async(req, res) =>{
    try {
        const Meals = await prisma.meals.findMany()
        res.send(Meals)
    } catch (error) {
        res.status(500).json({error: "something went wrong"})
    }
}