import IController from "../shared/abstraction/controller.interface";

import { NextFunction, Request, Response, Router } from "express";
import { NoteService } from "./note.service";
import { Note, createNoteReq } from "./note.model";
import CommandResponse from "../shared/abstraction/command-response";


export default class NoteController implements IController {
    path = '/note';
    router = Router();
    constructor(
        private readonly noteService: NoteService
    ) {


        this.router.post(`${this.path}`, this.createNote); // create  
        this.router.get(`${this.path}`, this.getNotes); // fetch   
    }






    async createNote(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response<CommandResponse<Note>>> {

        try {
            const validateReq = await createNoteReq.parse(req.body);

            const result = await this.noteService.create(validateReq.Title, validateReq.Content);
            const response = new CommandResponse<Note>(result);
            res.status(201)
            res.json(response);
            return res;
        }

        catch (err) {

            res.status(422);
            return res.json(
                new CommandResponse<Note>(null, ["faled to create note "])
            );
        }


    }


    async getNotes(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        try {
            const result = await this.noteService.GetNotes();
            const response = new CommandResponse<Note[]>(result);
            res.status(201)
            res.json(response);
            return res;
        }

        catch (err) {

            console.log(err)
            res.status(422);
            return res.json(
                new CommandResponse<Note>(null, ["faled to get notes "])
            );
        }
    }
}