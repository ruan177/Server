import { Request, Response} from 'express'
import {CreateUserService} from './createUserService'


export class CreateUserController{
    async handle(req: Request, res: Response){
        const {username, email, password} = req.body;

        const createUserService = new CreateUserService();
    
        try{
            const user = await createUserService.execute({
                username,
                email,
                password
            });
    
            return res.json({user})
        }catch(error: any){
            return res.status(422).json({ error: error.message })
        }

        
        
    }
    
}


