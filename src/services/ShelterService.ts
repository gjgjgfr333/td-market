import {AxiosResponse} from "axios";
import {$apiShelter} from "../http";
import {IDeliveryPoint2} from "../models/IDeliveryPoint";
import {IProductCard, IProductCardRes} from "../models/IProductCard";
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

    static async updateGoodCard(
        good: IProductCard,
        id: string,
        mainPhoto: string,
        additionalPhotos: string[]): Promise<AxiosResponse<IProductCard>> {
        return $apiShelter.put(`/product-cards/${id}`, {
            ...good,
            mainPhoto,
            additionalPhotos
        })
    }

    static async getShelter(): Promise<AxiosResponse<IShelterRes>> {
        return $apiShelter.get<IShelterRes>(`shelters/`)
    }

    static getCardsOfShelter(): Promise<AxiosResponse<IProductCardRes[]>> {
        return $apiShelter.get(`shelters/cards`)
    }

    static deleteCard(id: string): Promise<AxiosResponse<IProductCard>> {
        return $apiShelter.delete(`product-cards/${id}`)
    }
}
