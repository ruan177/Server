import { Request, Response} from 'express'
import { RefreshTokenService } from './RefreshTokeUserService';

export class RefreshTokenUserController{
    async handle(req: Request, res: Response){
        const {refresh_Token} = req.body;

        const refreshTokenService = new RefreshTokenService()

        const token = await refreshTokenService.execute(refresh_Token)

        return token

    }
}