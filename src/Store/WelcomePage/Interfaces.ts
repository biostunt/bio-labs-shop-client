
export interface ISliderItem {
    id: number;
    photo_url: string;
    page_url: string;
    title: string;
    description?: string;
}

export interface ISaleItem {
    id: number;
    name: string;
    photo_url: string;
    page_url: string;
    old_price: string;
    new_price: string;
}