import App from "./app";
import NoteController from "./note/note.controller";
import { NoteService } from "./note/note.service";
import { NoteInMemoryRepository } from "./note/repository/note.local-repository";



const r = new NoteInMemoryRepository()
const s = new NoteService(r)
const app = new App(3000,
    [new NoteController(s)]
)

app.listen();