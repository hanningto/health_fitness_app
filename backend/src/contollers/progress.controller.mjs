import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

//***********GET every progress */

export const allProgresses = async (req, res) => {
  const progress = await prisma.progress.findMany();
  console.log(progress);
  res.send(progress);
};

//*****************************calculate user progress */

export const getUserProgress = async (req, res) => {
  const {
    params: { id },
  } = req;


  const UserId = parsedInt(id);

  try{
    const goals = await prisma.goals.findMany({
        where: {
            user_id: UserId,
            include: {
                progress: true

            }
        }
    })

    const workouts = await prisma.workouts.findMany({
        where: {
            user_id: UserId
        }
    })

    const goalProgress = goals.map((goal) =>{
        let progressValue = 0

        switch(goal.goal_type){
            case 'steps':
                
            
        }
    })

  }
  catch{

  }
};
