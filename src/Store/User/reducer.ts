import { IProductItem } from "../../Interfaces/ProductItem.interface";
import { IUser } from "../../Interfaces/User.interface";
import { IStoreAction } from "../Interfaces";
import TYPE from './types';

const userData: IUser = {
    role: 'ADMINISTRATOR'
}
const cart: Array<IProductItem> = [];
const history: Array<IProductItem> = [];

const initialState = {
    userData,
    cart,
    history
};
export type TUserState = typeof initialState;


export const Reducer = (state: TUserState = initialState, {type, payload}: IStoreAction) => {
    switch (type) {
        case TYPE.ON_CHANGE_USER_DATA:
            return { ...state, userData: payload };
        case TYPE.ON_CHANGE_USER_HISTORY:
            return { ...state, history: payload }
        case TYPE.ON_CHANGE_USER_CART:
            return { ...state, cart: payload };
        default:
            return { ...state };
    }
}