import axios, {AxiosResponse} from "axios";
import {IAuthShelterResponse} from "../models/response/IAuthResponse";
import {$apiShelter, API_URL} from "../http";
import {IShelterRes} from "../models/response/IShelter";

interface ICheckShelter {
    email: boolean,
    phone: boolean
}

export class AuthShelterService {
    static async registrationShelter(shelter: FormData): Promise<AxiosResponse<IAuthShelterResponse>> {
        return $apiShelter.post<IAuthShelterResponse>('/auth-shelter/registration', shelter, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        })
    }

    static async login(email: string, password: string) {
        return $apiShelter.post<IShelterRes>('/auth-shelter/login', {email, password})
    }

    static async createNewPassword(email: string, password: string) {
        return $apiShelter.post<boolean>('/auth-shelter/create-password', {email, password})
    }

    static async checkShelter(email: string, phone: string): Promise<AxiosResponse<ICheckShelter>> {
        return axios.get<ICheckShelter>(`${API_URL}auth-shelter/check/${email}/${phone}`,)
    }
}
