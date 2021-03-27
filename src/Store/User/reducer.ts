import { IStoreAction } from "../Interfaces";

const initialState = {
    cart: [],
    role: 'user'
};

export type TUserState = typeof initialState;


export const Reducer = (state: TUserState = initialState, {type, payload}: IStoreAction) => {
    switch (type) {
        default:
            return { ...state };
    }
}