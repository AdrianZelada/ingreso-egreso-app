import * as fromActions from './ingreso-egreso.actions';
// import { IngresoEgreso } from './ingreso-egreso.model';
import { ingresoegreso } from "./ingresoEgreso.model";

export interface IngresoEgresoState{
    items:ingresoegreso[];
}

const initialState : IngresoEgresoState = {
    items:[]
}

export function IngresoEgresoReducer(state = initialState, action:fromActions.Actions):IngresoEgresoState {
    switch (action.type) {
        case fromActions.SET_ITEMS:                       
            return {
                items:[
                    ...action.items.map(item=>{
                        return {
                            ...item
                        }
                    })
                ] 
            }   
            
        case fromActions.UNSET_ITEMS:                
            return {
                items:[]
            };
        default:
            return state;
    }
}