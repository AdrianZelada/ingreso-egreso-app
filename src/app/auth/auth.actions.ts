import { Action } from "@ngrx/store";
import { User } from "./user.model";


export const SET_USER= "[AUTH] Set User";
export const UNSET_USER= "[AUTH] Unset User";

export class SetAuthAction implements Action {
    readonly type = SET_USER;
    constructor(public user : User) {}
}

export class UnsetAuthAction implements Action {
    readonly type = UNSET_USER;    
}

export type UserActions = SetAuthAction | UnsetAuthAction; 