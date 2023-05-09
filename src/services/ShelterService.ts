import {AxiosResponse} from "axios";
import {$apiShelter} from "../http";
import {IDeliveryPoint} from "../models/IDeliveryPoint";

export class ShelterService {
    static async getPointsIssue(): Promise<AxiosResponse<IDeliveryPoint[]>> {
        return $apiShelter.get<IDeliveryPoint[]>('/shelters/delivery-points')
    }
}