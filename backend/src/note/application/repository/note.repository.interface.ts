import { NoteEntity } from "../../domain/note.entity";



export interface INoteRepository {

    create(title: string, content: string): Promise<NoteEntity | null>;
    GetNotes(): Promise<NoteEntity[] | null>;
    GetNoteById(id: string): Promise<NoteEntity | null>;
    UpdateNote(date : NoteEntity): Promise<NoteEntity | null>;
    DeleteNote(id: string): Promise<void>;

}