import {TUserState} from './User/reducer';
import { TSettingsState } from './Settings/reducer';

export interface IStoreState {
    user: TUserState,
    settings: TSettingsState
}

