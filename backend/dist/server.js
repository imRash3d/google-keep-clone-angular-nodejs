"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const note_controller_1 = __importDefault(require("./note/note.controller"));
const note_service_1 = require("./note/note.service");
const note_local_repository_1 = require("./note/repository/note.local-repository");
const r = new note_local_repository_1.NoteInMemoryRepository();
const s = new note_service_1.NoteService(r);
const app = new app_1.default(3000, [new note_controller_1.default(s)]);
app.listen();
