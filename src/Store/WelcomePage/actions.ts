import { IStoreAction } from '../Interfaces';
import TYPE from './types';
import {ISliderItem} from './Interfaces'


const actionSliderItemsChanged = (items: Array<ISliderItem>) => ({ type: TYPE.ON_SLIDER_ITEMS_CHANGED, payload: items });


export const WelcomePageActions = {
    updateSliderItem: actionSliderItemsChanged
}