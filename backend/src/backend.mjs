import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser";


import router from "./routes/users.routes.mjs";
import workoutRouter from "./routes/workout.routes.mjs";
import progressRouter from "./routes/progress.route.mjs";
import goalsRouter from "./routes/goals.route.mjs";
import activitiesRoute from "./routes/activities.route.mjs";
import mealsRouter from "./routes/meals.route.mjs";
import sleepRouter from "./routes/sleep.route.mjs";
import waterIntakeRouter from "./routes/waterIntake.route.mjs";
import foodTypeRouter from "./routes/foodType.route.mjs";
import progressDetailsRouter from "./routes/GoalProgress.route.mjs";

const app = express();

app.use(express.json())
app.use(cors())
app.use(cookieParser(process.env.JWT_SECRET))

app.use('/api/', router)
app.use('/api/', workoutRouter)
app.use('/api/', progressRouter)
app.use('/api', goalsRouter)
app.use('/api', activitiesRoute)
app.use('/api/', mealsRouter)
app.use('/api/', sleepRouter)
app.use('/api', waterIntakeRouter)
app.use('/api', foodTypeRouter)
app.use('/api', progressDetailsRouter)



const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server running at ${port}`);
});
