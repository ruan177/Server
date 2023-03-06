import {prisma} from '../../lib/prisma'

import { GenerateTokenProvider } from "../../provider/GenerateTokenProvider";

export class RefreshTokenService {
    async execute(refresh_Token: string){
        const refreshToken = await prisma.refreshToken.findFirst({
            where: {
                id: refresh_Token,
            }
        })
        if(!refreshToken){
            throw new Error("Refresh Token Invalid ")
        }
        
        const generateTokenProvider = new GenerateTokenProvider();
        const token = await generateTokenProvider.execute(refreshToken.user_id);
        return token
    }
}