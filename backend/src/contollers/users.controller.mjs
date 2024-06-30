import {PrismaClient} from "@prisma/client"


const prisma = new PrismaClient()

export const getAllUsers = async(req, res) => {
    const users = await prisma.users.findMany()

    return res.send(users)
} 

export const getOneUser = async(req, res) => {
    const {param: {id}} = req
    const user = await prisma.users.findMany({
        where: {
            user_id: 2
        }
    })

    return res.send(user)
}