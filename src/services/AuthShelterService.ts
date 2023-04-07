import {AxiosResponse} from "axios";
import {IAuthShelterResponse} from "../models/response/IAuthResponse";
import {$apiShelter} from "../http";
import {IShelter} from "../models/response/IShelter";

export class AuthShelterService {
    static async registrationShelter(shelter: IShelter): Promise<AxiosResponse<IAuthShelterResponse>> {
        return $apiShelter.post<IAuthShelterResponse>('/auth-shelter/registration', {...shelter})
    }
}