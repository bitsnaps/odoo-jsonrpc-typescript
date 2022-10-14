import { Domain } from "domain";
import { BaseModel } from "../../BaseModel";

export class ResUsers<TModel> extends BaseModel<TModel> {
    public moduleName: string = 'res.users'
    constructor({ company_id: Domain }){
        super();
    }
}
