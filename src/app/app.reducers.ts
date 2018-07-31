import { ActionReducerMap } from '@ngrx/store';
import * as UiReducers from './shared/ui.reducer';


export interface AppState {
    ui:UiReducers.State
}

export const AppReducers : ActionReducerMap<AppState>={
    ui:UiReducers.uiReducer
}
