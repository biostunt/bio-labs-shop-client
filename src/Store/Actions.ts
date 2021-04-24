import { UserActions } from './User/actions';
import {WelcomePageActions} from './WelcomePage/actions'
import { CatalogueActions } from './Catalogue/actions';
import { ProductListActions } from './ProductList/actions';

export const Actions = {
    userActions: UserActions,
    welcomePageActions: WelcomePageActions,
    catalogueActions: CatalogueActions,
    productListActions: ProductListActions,
}

export type TStoreAction = typeof Actions;

export default Actions;