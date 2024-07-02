import {PrismaClient} from "@prisma/client"


const prisma = new PrismaClient()

//**************getting all users */
export const getAllUsers = async(req, res) => {
    const users = await prisma.users.findMany()

    return res.send(users)
} 


//******************************************getting Single user by id */

export const getOneUser = async(req, res) => {
    const {params: {id}} = req
    const parsedId= parseInt(id)
    console.log(parsedId)
    const user = await prisma.users.findUnique({
        where: {
            user_id: parsedId
        }
    })

    return res.send(user)
}

//***********************************filtering user using query params */

export const filterUsers = async(req, res) => {
    const {query: {filter, value}} = req
    const result = prisma.users.findMany({
        where: {
            filter: value
        }
    })
}
