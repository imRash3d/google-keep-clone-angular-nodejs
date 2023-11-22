import { NextFunction, Request, Response, Router } from "express";
import IController from "../shared/abstraction/controller.interface";

export default class UserController implements IController {
    path: string = '/user';
    router: Router = Router();

    constructor() {
        this.router.post(`${this.path}`, this.createUser); // create  
        this.router.get(`${this.path}`, this.getUsers); // fetch   
    }




    createUser(

        req: Request,
        res: Response,
        next: NextFunction
    ) {

    }


    getUsers(

        req: Request,
        res: Response,
        next: NextFunction
    ) {

    }
}