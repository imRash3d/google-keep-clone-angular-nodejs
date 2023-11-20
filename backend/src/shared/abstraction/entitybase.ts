import { u4 as uuid } from 'uuid'
export abstract class EntityBase {
    Id: string;
    CreateDate: string;
    lastUpdateDate: string;
    CreatedBy: string;

    constructor() {
        this.Id = uuid();
        this.CreateDate = new Date().toISOString();
        this.lastUpdateDate = new Date().toISOString();
    }
}