import { UserActions } from './User/actions';
import {WelcomePageActions} from './WelcomePage/actions'

export const Actions = {
    userActions: UserActions,
    welcomePageActions: WelcomePageActions,
}

export type TStoreAction = typeof Actions;

export default Actions;