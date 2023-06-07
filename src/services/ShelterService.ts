import {AxiosResponse} from "axios";
import {$apiShelter} from "../http";
import {IDeliveryPoint2} from "../models/IDeliveryPoint";
import {IProductCard} from "../models/IProductCard";
import {IShelterRes} from "../models/response/IShelter";

export class ShelterService {
    static async getPointsIssue(): Promise<AxiosResponse<IDeliveryPoint2[]>> {
        return $apiShelter.get<IDeliveryPoint2[]>('/shelters/delivery-points')
    }

    static async createGoodCard(good: FormData): Promise<AxiosResponse<IProductCard>> {
        return $apiShelter.post('/product-cards', good, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        })
    }

    static async getShelter(): Promise<AxiosResponse<IShelterRes>> {
        return $apiShelter.get<IShelterRes>(`shelters/`)
    }
}
