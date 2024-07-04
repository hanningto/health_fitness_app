import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

//**************getting all users */
export const getAllUsers = async (req, res) => {
  const users = await prisma.users.findMany();

  return res.send(users);
};

//******************************************getting Single user by id */

export const getOneUser = async (req, res) => {
  const {
    params: { id },
  } = req;
  const parsedId = parseInt(id);
  console.log(parsedId);
  const user = await prisma.users.findUnique({
    where: {
      user_id: parsedId,
    },
  });

  return res.send(user);
};

//***********************************filtering user using query params */

export const filterUsers = async (req, res) => {
  const {
    query: { filter, value },
  } = req;
  const result = prisma.users.findMany({
    where: {
      filter: value,
    },
  });
};
// **********************************adding a user to the database*********************************

const JWT_SECRET = "your_jwt_secret_key";
export const createUser = async (req, res) => {
  const { username, password, email } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await prisma.users.create({
      data: {
        username: username,
        password: hashedPassword,
        email: email,
      },
    });

    return res
      .status(201)
      .json({ message: "user registered successfully", newUser });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Registration Failed", newUser });
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await prisma.users.findUnique({
      where: { username },
    });

    if (!user) {
      res.status(400).json({ error: "Invalid username or password" });
    } else {
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        res.status(400).json({ error: "Invalid username or password" });
      }

      const token = jwt.sign({ userId: user.user_id }, JWT_SECRET, {
        expiresIn: "1h",
      });

      res.json({ message: "Login Successfull" });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Login Failed" });
  }
};
