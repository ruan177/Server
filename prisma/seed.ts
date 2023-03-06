import { PrismaClient } from '@prisma/client'
import { hash } from 'bcrypt'

const prisma = new PrismaClient()
async function main() {
    await prisma.user.upsert({
        where: { 
            email: 'ruanpatrick177@gmail.com' },
        update: {},
        create: {
            email: 'ruanpatrick177@gmail.com',
            username: "ruan177",
            password: await hash('12345', 8)
        }

    })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })