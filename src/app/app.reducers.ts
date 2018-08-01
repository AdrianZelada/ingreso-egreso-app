import { ActionReducerMap } from '@ngrx/store';
import * as UiReducers from './shared/ui.reducer';
import * as UserReducers from './auth/auth.reducer';
import * as InEgReducers from './ingreso-egreso/ingreso-egreso.reducer';
export interface AppState {
    ui:UiReducers.State,
    auth:UserReducers.AuthState
    ingresoEgreso:InEgReducers.IngresoEgresoState
}

export const AppReducers : ActionReducerMap<AppState>={
    ui:UiReducers.uiReducer,
    auth:UserReducers.UserReducer,
    ingresoEgreso:InEgReducers.IngresoEgresoReducer
}
