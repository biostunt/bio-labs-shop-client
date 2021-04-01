import {TUserState} from './User/reducer';
import { TSettingsState } from './Settings/reducer';
import { TWelcomePageState } from './WelcomePage/reducer';

export interface IStoreState {
    user: TUserState,
    settings: TSettingsState,
    welcomePage: TWelcomePageState
}

