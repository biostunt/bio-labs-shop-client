import { IStoreAction } from '../Interfaces';
import TYPE from './types';
import { INewsItem } from '../../Interfaces/News.interface';
import { ISaleItem } from '../../Interfaces/Sale.interface';


const actionNewsItemsChanged = (items: Array<INewsItem>): IStoreAction => ({ type: TYPE.ON_NEWS_ITEMS_CHANGED, payload: items });

const actionSaleItemsChanged = (items: Array<ISaleItem>): IStoreAction => ({type: TYPE.ON_SALE_ITEMS_CHANGED, payload: items})


export const WelcomePageActions = {
    updateNewsItems: actionNewsItemsChanged,
    updateSaleItems: actionSaleItemsChanged
}