import { Request, Response} from 'express'
import {AuthenticateUserSevice} from './AuthenticateUserService'


export class AuthenticateUserController{
    async handle(req: Request, res: Response){
        const {email, password} = req.body;

        const authenticateUserService = new AuthenticateUserSevice();
    
        try{
            const token = await authenticateUserService.execute({
                email,
                password
            });
    
            return res.json({token})
        }catch(error: any){
            return res.status(422).json({ error: error.message })
        }

        
        
    }
    
}

