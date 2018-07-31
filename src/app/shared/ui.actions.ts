import { Action} from '@ngrx/store';

const KEY_LOADION = '[ UI LOADIONG ]';
export const ACTIVATE_LOADING = `${KEY_LOADION} Loading`;
export const FINISH_LOADING   = `${KEY_LOADION} Finish Loaded`;

export class ActivateLoadingAction implements Action {
    readonly type = ACTIVATE_LOADING;
}

export class FinishLoadingAction implements Action {
    readonly type = FINISH_LOADING;
}

export type ActionsLoading = ActivateLoadingAction | FinishLoadingAction;