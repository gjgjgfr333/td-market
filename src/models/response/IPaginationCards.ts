import {IProductCard} from "../IProductCard";

export interface IPaginationCards {
    currentPage: string,
    totalPages: number,
    productCards: IProductCard[]
}
