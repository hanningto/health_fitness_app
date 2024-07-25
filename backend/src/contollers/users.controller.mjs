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

  try {
    const result = await prisma.users.findMany({
      where: {
        [filter]: value,
      },
    });
    return res.send(result);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Failed to filter users" });
  }
};

// **********************************adding a user to the database*********************************

const JWT_SECRET = "your_jwt_secret_key";
export const createUser = async (req, res) => {
  const { username, password, email } = req.body;
  console.log("getting bogy ", username)
  console.log('Received request with:', req.body);
  if (!username || !email || !password) {
    return res.status(400).json({ error: 'Username, email, and password are required' });
  }
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
      .status(200)
      .json({ message: "user registered successfully", newUser });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Registration Failed", error });
  }
};

//**************************lOGIN  */
export const login = async (req, res) => {
  const { username, password } = req.body;
  console.log(username)
  try {
    const user = await prisma.users.findUnique({
      where: { username: username },
      include: {
        meals: true
      }

    });

    if (!user) {
      res.status(400).json({ error: "Invalid username or password" });
    } else {
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        console.log("Wronng password entered")
        res.status(400).json({ error: "Invalid username or password" });
      }
      else{
        const token = jwt.sign(
        { userId: user.user_id },
        JWT_SECRET,
        {
          expiresIn: "1h",
        }
      );

      res.cookie("token", token, {
        httpOnly: true,
        signed: true,
        maxAge: 24 * 60 * 60 * 1000,
      })
      res.json({ message: "Login Successfull", user:user, token:token });
    }
      }

      
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Login Failed",});
  }
};


//*************************LOGOUT */

export const logout = (req, res) => {
  res.clearCookie("token")
  res.send({message: "Logged out Successfully"})
} 