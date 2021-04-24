import {TUserState} from './User/reducer';
import { TSettingsState } from './Settings/reducer';
import { TWelcomePageState } from './WelcomePage/reducer';
import { TCatalogueState } from './Catalogue/reducer';
import { TProductListState } from './ProductList/reducer';

export interface IStoreState {
    user: TUserState,
    settings: TSettingsState,
    welcomePage: TWelcomePageState,
    catalogue: TCatalogueState,
    productList: TProductListState,
}

