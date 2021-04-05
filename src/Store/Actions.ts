import { UserActions } from './User/actions';
import {WelcomePageActions} from './WelcomePage/actions'
import { CatalogueActions } from './Catalogue/actions';

export const Actions = {
    userActions: UserActions,
    welcomePageActions: WelcomePageActions,
    catalogueActions: CatalogueActions
}

export type TStoreAction = typeof Actions;

export default Actions;