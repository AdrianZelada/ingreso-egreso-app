import { Action } from "@ngrx/store";
import { User } from "./user.model";

const KEY = '[AUTH]'
export const SET_USER= `${KEY} Set User`;

export class SetAuthAction implements Action {
    readonly type = SET_USER;
    constructor(public user : User) {}
}

export type UserActions = SetAuthAction; 