import { ActionReducerMap } from '@ngrx/store';
import * as UiReducers from './shared/ui.reducer';
import * as UserReducers from './auth/auth.reducer';

export interface AppState {
    ui:UiReducers.State,
    auth:UserReducers.AuthState
}

export const AppReducers : ActionReducerMap<AppState>={
    ui:UiReducers.uiReducer,
    auth:UserReducers.UserReducer
}
