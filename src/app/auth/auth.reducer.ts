import * as UserActions from './auth.actions';
import { User } from './user.model';

export interface AuthState{
    user:User
}

const initState :AuthState= {
    user:null
}
export function UserReducer(state = initState, action:UserActions.UserActions ):AuthState {
    switch (action.type) {
        case UserActions.SET_USER:            
            return {
                user:{ ...action.user }
            }

        case UserActions.UNSET_USER:            
            return {
                user:null
            }
    
        default:
            return state;
    }
}