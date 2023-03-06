import { Request, Response} from 'express'
import { GetUserByIdService } from './GetUserByIdService';

export class GetUserByIdController{
    async handle(req: Request, res: Response){
        const userId = req.params.uuid

        const getUserByIdService = new GetUserByIdService();
        try{
            const user = await getUserByIdService.execute(userId)

            return res.json(user)

        }catch(error: any){
            return res.status(500).json({error: error.message})
        }
    }
}