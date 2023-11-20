

import * as z from 'zod';


export const createNoteReq = z.object({
    Title: z.string().min(1),
    Content: z.string().min(1)
})

export type Note ={
    Id: string;
    Title: string;
    Content: string;
    IsArchived: boolean;
    Tags: string[];
    IsPinned: boolean;
    BackgroundColor: string;
    Images: string[];
    
}


export type CreateNoteDto = z.infer<typeof createNoteReq>;