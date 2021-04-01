import { Action } from "redux";
import { IStoreAction } from "../Interfaces";



const initialState = {
    sliderItems: [
        {
            id: 1,
            photo_url: 'https://cdn.pixabay.com/photo/2016/12/29/18/44/background-1939128_960_720.jpg',
            page_url: '/promo',
            title: 'New Iphone XXL',
            description: 'Just click and buy'
        },
        {
            id: 1,
            photo_url: 'https://instapik.ru/wp-content/uploads/2020/08/black-background.jpg',
            page_url: '/promo',
            title: 'Black Friday BLM',
            description: '*not for Russian Federation'
        },
    ],
    saleItems: [
        {
            id: 1,
            name: "chainsaw PJ-500",
            photo_url:
                "https://cdn.vseinstrumenti.ru/images/goods/avtogarazhnoe-oborudovanie/oborudovanie-i-instrument-dlya-avtoservisa-i-sto/728122/160x144/51729953.jpg",
            page_url: "/component",
            old_price: "123.23",
            new_price: "342.54"
        }
    ]
}

export type TWelcomePageState = typeof initialState;

export const Reducer = (state: TWelcomePageState = initialState, { type, payload }: IStoreAction) => {
    switch (type) {
        default:
            return { ...state };
    }
}
