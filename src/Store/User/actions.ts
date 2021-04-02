import { IProductItem } from '../../Interfaces/ProductItem.interface';
import { IUser } from '../../Interfaces/User.interface';
import { IStoreAction } from '../Interfaces';
import TYPE from './types';



const actionChangeUserData = (user: IUser): IStoreAction => ({ type: TYPE.ON_CHANGE_USER_DATA, payload: user });
const actionChangeUserHistory = (items: Array<IProductItem>): IStoreAction => ({ type: TYPE.ON_CHANGE_USER_HISTORY, payload: items });
const actionChangeUserCart = (items: Array<IProductItem>): IStoreAction => ({ type: TYPE.ON_CHANGE_USER_CART, payload: items });

export const UserActions = {
    changeUserData: actionChangeUserData,
    changeUserHistory: actionChangeUserHistory,
    changeUserCart: actionChangeUserCart
}