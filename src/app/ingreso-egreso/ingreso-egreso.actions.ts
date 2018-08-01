import { Action } from "@ngrx/store";
// import { IngresoEgreso } from "./ingreso-egreso.model";
import { ingresoegreso } from "./ingresoEgreso.model";

const KEYITEMS = '[INGRESO EGRESO]';
export const SET_ITEMS = `[INGRESO EGRESO] Set Items`;
export const UNSET_ITEMS = `[INGRESO EGRESO] Unset Items`;


export class SetItemsAction implements Action {
    readonly type = SET_ITEMS;
    constructor(public items : ingresoegreso[]){}
}


export class UnsetItemsAction implements Action {
    readonly type = UNSET_ITEMS;    
}

export type Actions = SetItemsAction | UnsetItemsAction;