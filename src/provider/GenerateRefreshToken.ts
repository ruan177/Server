import {prisma} from '../lib/prisma'
import dayjs from 'dayjs'

export class GenerateRefreshToken {

    async execute(user_id: string){

        const expiresIn = dayjs().add(24, "hours").unix()

        const refreshToken = await prisma.refreshToken.create({
            data: {
                user_id,
                expiresIn
            }
        })
        
        return refreshToken;
    }
       

}