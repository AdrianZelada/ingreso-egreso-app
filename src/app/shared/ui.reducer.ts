
import * as UiActions from './ui.actions';

export interface State {
    isLoading :boolean
}

const initState : State ={
    isLoading: false
}
export function uiReducer(state = initState, action: UiActions.ActionsLoading) {
    switch (action.type) {
        case UiActions.ACTIVATE_LOADING:
            return{
                isLoading:true
            }            
            
        case UiActions.FINISH_LOADING:
            return{
                isLoading:false
            }            
        default:
            return state;            
    }   
}