import {AxiosResponse} from "axios";
import {$apiShelter} from "../http";
import {IProductCard} from "../models/IProductCard";

export class GoodsService {
    static async getNewGoods(): Promise<AxiosResponse<IProductCard[]>> {
        return $apiShelter.get<IProductCard[]>('/product-cards/new')
    }

}
