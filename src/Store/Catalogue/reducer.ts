import { IGroup } from "../../Interfaces/Catalogue.interface";
import { IStoreAction } from "../Interfaces";
import TYPE from './types';

const groups: Array<IGroup> = [];

const initialState = {
    groups
}
export type TCatalogueState = typeof initialState;

export const Reducer = (state: TCatalogueState = initialState, {type, payload}: IStoreAction) => {
    switch (type) {
        case TYPE.ON_GROUPS_CHANGED:
            return { ...state, groups: payload };
        default:
            return { ...state };
    }
}