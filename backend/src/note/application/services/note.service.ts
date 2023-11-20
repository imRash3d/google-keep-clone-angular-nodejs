import { Note } from "../../contracts/note.model";
import { INoteRepository } from "../repository/note.repository.interface";


export class NoteService {


    constructor(private readonly repo: INoteRepository) {

    }


    async create(title: string, content: string): Promise<Note | null> {
        return await this.repo.create(title, content);
    }
    async GetNotes(): Promise<Note[] | null> {
        return await this.repo.GetNotes();
    }
    async GetNoteById(id: string): Promise<Note | null> {
        return await this.repo.GetNoteById(id);
    }
    async UpdateNote(id: string, title: string, content: string): Promise<Note | null> {
        throw new Error("Method not implemented.");
    }
    async DeleteNote(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

}