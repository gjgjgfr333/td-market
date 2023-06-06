import {IProductCard} from "../models/IProductCard";
import {API_URL} from "../http";
import {IPaginationCards} from "../models/response/IPaginationCards";

export class GoodsService {
    static async getNewGoods(page: number, limit: number): Promise<AxiosResponse<IPaginationCards>> {
        return axios.get<IPaginationCards>(`${API_URL}product-cards/new`, {
            params: {
                page,
                limit
            }
        })
    }

    static async getHotGoods(page: number, limit: number): Promise<AxiosResponse<IPaginationCards>> {
        return axios.get<IPaginationCards>(`${API_URL}product-cards/hot-offers`, {
            params: {
                page,
                limit
            }
        })
    }
}
