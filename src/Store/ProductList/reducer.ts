import { ISearchQuery } from "../../Interfaces/ProductSearchQuery.interface";
import { IStoreAction } from "../Interfaces";
import TYPE from "./types";

const searchQuery : ISearchQuery = {
    price: {
        min: 0,
        max: 0,
    },
    group: 0,
    category: 0,
    rating: 0,
    orderBy: 'price-min',
}


const initialState = {
    searchQuery
}

export type TProductListState = typeof initialState;



export const Reducer = (state: TProductListState = initialState, { type, payload }: IStoreAction) => {
    switch (type) {
        case TYPE.ON_SEARCH_QUERY_PRICE_CHANGED:
            return { ...state, searchQuery: { ...state.searchQuery, price: payload } };
        default:
            return { ...state };
    }
}