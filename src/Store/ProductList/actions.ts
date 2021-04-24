import { TSearchQueryOrder, ISearchQueryPrice } from '../../Interfaces/ProductSearchQuery.interface';
import TYPE from './types';



export const onSearchQueryPriceChanged = (data: ISearchQueryPrice) => ({ type: TYPE.ON_SEARCH_QUERY_PRICE_CHANGED, payload: data });
export const onSearchQueryGroupChanged = (group: number) => ({ type: TYPE.ON_SEARCH_QUERY_GROUP_CHANGED, payload: group });
export const onSearchQueryCategoryChanged = (category: number) => ({ type: TYPE.ON_SEARCH_QUERY_CATEGORY_CHANGED, payload: category });
export const onSearchQueryRatingChanged = (rating: number) => ({ type: TYPE.ON_SEARCH_QUERY_GROUP_CHANGED, payload: rating });
export const onSearchQueryOrderChanged = (order: TSearchQueryOrder) => ({ type: TYPE.ON_SEARCH_QUERY_GROUP_CHANGED, payload: order });


export const ProductListActions = {
    changeSearchQueryPrice: onSearchQueryPriceChanged,
    changeSearchQueryGroup: onSearchQueryGroupChanged,
    changeSearchQueryCategory: onSearchQueryCategoryChanged,
    changeSearchQueryRating: onSearchQueryRatingChanged,
    changeSearchQueryOrder: onSearchQueryOrderChanged,
}