import { NoteEntity } from "../../domain/note.entity";
import { INoteRepository } from "./note.repository.interface";

export class NoteInMemoryRepository implements INoteRepository {


    private NOTES: NoteEntity[] = [
        new NoteEntity("Sample Note 1", "this is sample Note 1")
    ]
    async create(title: string, content: string): Promise<NoteEntity | null> {


        const note = new NoteEntity(title, content);
        this.NOTES.push(note);
        return this.asyncTempOperation<NoteEntity>(note);

    }
    async GetNotes(): Promise<NoteEntity[] | null> {

        return this.asyncTempOperation<NoteEntity[]>(this.NOTES);

    }
    async GetNoteById(id: string): Promise<NoteEntity | null> {
        return this.asyncTempOperation<NoteEntity>(this.NOTES[0]);
    }
    async UpdateNote(date: NoteEntity): Promise<NoteEntity | null> {
        return this.asyncTempOperation<NoteEntity>(this.NOTES[0]);
    }
    async DeleteNote(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }


    private asyncTempOperation<T>(value: T): Promise<T> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(value);
            }, 1000);
        });
    }
}