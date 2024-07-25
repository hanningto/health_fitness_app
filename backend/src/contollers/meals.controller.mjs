import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createMeal = async (req, res) => {
  const { userId, mealDate, mealTime, foodType, calories, notes, mealType } =
    req.body;

  try {
    const meal = await prisma.meals.create({
      data: {
        user_id: userId,
        meal_date: new Date(mealDate),
        meal_time: mealTime,
        food_type: foodType,
        meal_type: mealType,
        calories,
        notes,
      },
    });
    res.status(201).json(meal);
  } catch (error) {
    console.error("Error creating meal:", error);
    res.status(500).json({ error: "Error creating meal" });
  }
};

export const getMeals = async (req, res) => {
  const { userId } = req.params;

  try {
    const meals = await prisma.meals.findMany({
      where: { user_id: parseInt(userId) },
      orderBy: { meal_date: "desc" },
    });
    res.status(200).json(meals);
  } catch (error) {
    console.error("Error retrieving meals:", error);
    res.status(500).json({ error: "Error retrieving meals" });
  }
};

export const allMeals = async (req, res) => {
  try {
    const Meals = await prisma.meals.findMany();
    res.send(Meals);
  } catch (error) {
    res.status(500).json({ error: "something went wrong" });
  }
};

export const getUserMeals = async () => {
  const meals = await prisma.meals.findMany();
};

export const deleteMeal = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    await prisma.meals.delete({
      where: {
        meal_id: parseInt(id),
      },
    });
    res.status(200).json({ message: "Meal deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Unable to delete meal" });
  }
};

export const updateMeal = async (req, res) => {
  const {
    params: { id },
  } = req;
  const { meal_type, meal_time, meal_date, food_type, calories, notes } =
    req.body;
  console.log(req.body);
  console.log(id);
  try {
    const updatedMeal = await prisma.meals.update({
      where: {
        meal_id: parseInt(id),
      },
      data: {
        meal_type: meal_type,
        meal_time: meal_time,
        meal_date: new Date(meal_date),
        food_type: food_type,
        calories: calories,
        notes: notes,
      },
    });
    res
      .status(200)
      .json({ message: "Meal updated Successfully", data: updatedMeal });
  } catch (error) {
    res.status(500).json({ error: "Unable to update Meal" });
  }
};
