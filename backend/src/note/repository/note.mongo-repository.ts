import { NoteEntity } from "../note.entity";
import { INoteRepository } from "../note.repository.interface";


export class NoteMongoRepository implements INoteRepository {
    async create(title: string, content: string): Promise<NoteEntity | null> {
        throw new Error("Method not implemented.");
    }
    async GetNotes(): Promise<NoteEntity[] | null> {
        throw new Error("Method not implemented.");
    }
    async GetNoteById(id: string): Promise<NoteEntity | null> {
        throw new Error("Method not implemented.");
    }
    async UpdateNote(date : NoteEntity): Promise<NoteEntity | null> {
        throw new Error("Method not implemented.");
    }
    async DeleteNote(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

}