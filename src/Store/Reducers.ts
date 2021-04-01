import { Reducer as user } from './User/reducer';
import { Reducer as settings } from './Settings/reducer';
import { Reducer as welcomePage } from './WelcomePage/reducer';

export const StoreReducer = {
    user, settings, welcomePage
}