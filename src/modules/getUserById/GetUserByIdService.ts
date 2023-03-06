import {prisma} from '../../lib/prisma'

export class GetUserByIdService{
    async execute(user_id: string){
        const userAlreadyExists = await prisma.user.findFirst({
            where:{
                id: user_id
            },
            include: {
                subscribed_courses: true
            }
        })
        if(!userAlreadyExists){
            throw new Error("User already exists!");
        }

        function exclude<User, Key extends keyof User>(
            user: User,
            keys: Key[]
            ): Omit<User, Key> {
            for (let key of keys) {
                delete user[key]
            }
            return user
        }   
        const userWithoutPassword = exclude(userAlreadyExists, ['password'])

        return userWithoutPassword
    }
}