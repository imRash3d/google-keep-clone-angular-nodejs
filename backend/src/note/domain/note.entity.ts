
import { EntityBase } from "../../shared/abstraction/entitybase";

export class NoteEntity extends EntityBase {


    Title: string;
    Content: string;
    IsArchived: boolean;
    Tags: string[];
    IsPinned: boolean;
    BackgroundColor: string;
    Images: string[];


    constructor(title: string, content: string) {
        super();
        this.Title = title;
        this.Content = content;
        this.IsArchived = false;
        this.Tags = [];
        this.IsPinned = false;
        this.BackgroundColor = "";
        this.Images = [];
    

    }




}