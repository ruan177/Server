import {prisma} from '../../lib/prisma'
import {hash}from 'bcrypt'
import {UserRequest} from './createUserSchema'

export class CreateUserService{
    async execute({username, email, password}:UserRequest) {
        const userAlreadyExists = await prisma.user.findFirst({
            where: {
                username,
            },
        });

        if(!userAlreadyExists){
            throw new Error("User already exists!");
        }
        const hashedPassword = await hash(password, 8);

        const user = await prisma.user.create({
            data:{
                username, 
                email, 
                password: hashedPassword
            },
        });

        return user;
    }}