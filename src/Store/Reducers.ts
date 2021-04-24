import { Reducer as user } from './User/reducer';
import { Reducer as settings } from './Settings/reducer';
import { Reducer as welcomePage } from './WelcomePage/reducer';
import { Reducer as catalogue } from './Catalogue/reducer';
import { Reducer as productList } from './ProductList/reducer';

export const StoreReducer = {
    user, settings, welcomePage, catalogue, productList
}