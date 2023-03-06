import { Request, Response} from 'express'
import { DeleteUserService } from './DeleteUserService'


export class DeleteUserController{
    async handle(req: Request, res: Response){
        const userId = req.params.uuid

        const deleteUserService = new DeleteUserService();

        try{
            const deletedUser = deleteUserService.execute(userId)

            return res.json(deletedUser)
        }catch(error: any){
            return res.status(500).json({error: error.message})
        }
        



    }
}