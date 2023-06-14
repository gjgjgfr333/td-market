import axios, {AxiosResponse} from "axios";
import {IAuthShelter} from "../models/response/IAuthResponse";
import {$apiShelter, API_URL} from "../http";

interface ICheckShelter {
    email: boolean,
    phone: boolean
}

export class AuthShelterService {
    static async registrationShelter(shelter: FormData): Promise<AxiosResponse<IAuthShelter>> {
        return $apiShelter.post<IAuthShelter>('/auth-shelter/registration', shelter, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        })
    }

    static async login(email: string, password: string): Promise<AxiosResponse<IAuthShelter>> {
        return $apiShelter.post<IAuthShelter>('/auth-shelter/login', {email, password})
    }

    static async createNewPassword(email: string, password: string) {
        return $apiShelter.post<boolean>('/auth-shelter/create-password', {email, password})
    }

    static async checkShelter(email: string, phone: string): Promise<AxiosResponse<ICheckShelter>> {
        return axios.get<ICheckShelter>(`${API_URL}auth-shelter/check/${email}/${phone}`,)
    }
}
