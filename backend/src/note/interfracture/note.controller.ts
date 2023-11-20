import Icontroller from "../../shared/abstraction/controller.interface";

import { NextFunction, Request, Response, Router } from "express";
import { NoteService } from "../application/services/note.service";
import { Note, createNoteReq } from "../contracts/note.model";
import CommandResponse from "../../shared/abstraction/command-response";


export default class NoteController implements Icontroller {
    path: string;
    router: Router = Router();

    constructor(
        private readonly noteService: NoteService
    ) {


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
            const validateReq = await createNoteReq.parse(req.body);

            const result = await this.noteService.GetNotes();
            const response = new CommandResponse<Note[]>(result);
            res.status(201)
            res.json(response);
            return res;
        }

        catch (err) {

            res.status(422);
            return res.json(
                new CommandResponse<Note>(null, ["faled to get notes "])
            );
        }
    }
}