import { IStoreAction } from '../Interfaces';
import {IPage} from './Interfaces'

const pages: Array<IPage> = [
    {
        url: '/about',
        name: 'About us',
        access: 'user',
        icon_name: 'info circle',
        listOrder : 2
    },
    {
        url: '/goods',
        name: 'Goods',
        access: 'user',
        icon_name: 'shopping basket',
        listOrder : 1
    },
    {
        url: '/feedback',
        name: 'Feedback',
        access: 'user',
        icon_name: 'feed',
        listOrder: 3
    },
    {
        url: '/pcabinet',
        name: 'Account',
        access: 'user',
        icon_name: 'user circle',
        listOrder: 4
    },    
]


const initialState = {
    pages
}

export type TSettingsState = typeof initialState;

export const Reducer = (state: TSettingsState = initialState, {type, payload}: IStoreAction) => {
    switch (type) {
        default:
            return { ...state };
    }
}