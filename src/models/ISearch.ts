import {IProductCard} from "./IProductCard";

export interface ISearch {
    cards: IProductCard[],
    isLoading: boolean,
    error: string
}
