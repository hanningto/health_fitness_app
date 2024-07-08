import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser";


import router from "./routes/users.routes.mjs";
import workoutRouter from "./routes/workout.routes.mjs";
import progressRouter from "./routes/progress.route.mjs";
import goalsRouter from "./routes/goals.route.mjs";
import activitiesRoute from "./routes/activities.route.mjs";

const app = express();

app.use(express.json())
app.use(cors())
app.use(cookieParser(process.env.JWT_SECRET))

app.use('/api/', router)
app.use('/api/', workoutRouter)
app.use('/api/', progressRouter)
app.use('/api', goalsRouter)
app.use('/api', activitiesRoute)



const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server running at ${port}`);
});
