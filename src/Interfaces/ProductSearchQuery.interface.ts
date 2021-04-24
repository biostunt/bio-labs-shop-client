export type TSearchQueryOrder = 'price-min' | 'price-max' | 'rating-min' | 'rating-max';

export interface ISearchQueryPrice {
    min: number;
    max: number;
};

export interface ISearchQuery {
    price: ISearchQueryPrice,
    group: number;
    category: number;
    rating: number;
    orderBy: TSearchQueryOrder;
}