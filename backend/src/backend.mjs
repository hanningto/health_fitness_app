import express from "express";
import { PrismaClient } from "@prisma/client";
import router from "./routes/users.routes.mjs";

const prisma = new PrismaClient();

const app = express();

app.use(express.json())
app.use('/api/users/', router)










const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server running at ${port}`);
});
