import {Router} from "express";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { AuthenticateUserController } from "./modules/authenticateUser/AuthenticateUserController";
import { CreateUserController } from "./modules/createUser/createUserController";
import { RefreshTokenUserController } from "./modules/refreshTokenUser/RefreshTokenUserController";
import { GetUserByIdController } from "./modules/getUserById/GetUserByIdController";
import { DeleteUserController } from "./modules/deleteUserById/DeleteUserController";

const routes = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const refreshTokenUserController = new RefreshTokenUserController();
const getUserByIdController = new GetUserByIdController();
const deleteUserController= new DeleteUserController();
 
routes.post("/register", createUserController.handle);
routes.post("/login", authenticateUserController.handle);
routes.post("/refresh-token", refreshTokenUserController.handle);
//routes.delete("/users/:uuid", deleteUserController.handle); imcompleto
//routes.get("/users/:uuid", getUserByIdController.handle); imcompleto
//routes.get("/course", ensureAuthenticated, ) imcompleto
 


export {routes}