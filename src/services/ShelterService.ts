import {AxiosResponse} from "axios";
import {$apiShelter} from "../http";
import {IDeliveryPoint2} from "../models/IDeliveryPoint";
import {IProductCard} from "../models/IProductCard";

export class ShelterService {
    static async getPointsIssue(): Promise<AxiosResponse<IDeliveryPoint2[]>> {
        return $apiShelter.get<IDeliveryPoint2[]>('/shelters/delivery-points')
    }

    static async createGoodCard(good: IProductCard): Promise<AxiosResponse<IProductCard>> {
        return $apiShelter.post('/product-card', good)
    }
}