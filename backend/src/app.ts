import express, { Application } from "express";
import IController from "./shared/abstraction/controller.interface";
import cors from "cors";




export default class App {
    private readonly express: Application;
    private readonly port: number;
    constructor(port: number, controllers: IController[]) {
        this.port = port;
        this.express = express();


        this.initMiddleware();
        this.initController(controllers);
        this.handleError();
    }


    private initController(controllers: IController[]) {
        controllers.forEach(c => {
            this.express.use('/api', c.router)
        })
    }

    private initMiddleware() {
        this.express.use(cors());
        this.express.use(express.json());
        this.express.use(express.urlencoded({ extended: false }));
    }

    listen() {
        this.express.listen(this.port, async () => {
            console.log(`App listening on the port ${this.port}`);
            try {

            } catch (error) {

                process.exit(1); // Exit the server if MongoDB connection fails
            }
        })
    }

    private handleError() {

    }
}