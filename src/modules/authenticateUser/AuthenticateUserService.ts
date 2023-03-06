import {prisma} from '../../lib/prisma'
import { compare } from 'bcrypt'
import {sign} from 'jsonwebtoken'
import {GenerateRefreshToken} from '../../provider/GenerateRefreshToken'
import { GenerateTokenProvider} from '../../provider/GenerateTokenProvider'
import {AuthenticateRequest} from './AuthenticateUserSchema'



export class AuthenticateUserSevice{
    async execute({email, password}:AuthenticateRequest) {
        const userAlreadyExists = await prisma.user.findFirst({
            where: {
                email
            }
        })

        if(!userAlreadyExists){
            throw new Error("unregistered user or incorrect email");
        }

        const passwordMatch = await compare(password, userAlreadyExists.password)

        if(!passwordMatch){
            throw new Error("Password is incorrect")
        }
        const generateTokenProvider = new GenerateTokenProvider();
        const generateRefreshToken = new GenerateRefreshToken();

        const token = await generateTokenProvider.execute(userAlreadyExists.id);
        const refreshToken = await generateRefreshToken.execute(userAlreadyExists.id);

    
    return {token, refreshToken};
        
    }

    
}