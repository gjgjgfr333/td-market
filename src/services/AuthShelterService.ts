import {AxiosResponse} from "axios";
import {IAuthShelter} from "../models/response/IAuthResponse";
import {$apiShelter} from "../http";

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
}
