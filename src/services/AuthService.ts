import {AxiosResponse} from "axios";
import $api from "../http";
import {IAuthResponse} from "../models/response/IAuthResponse";
import {IUser} from "../models/response/IUser";

export class AuthService {
    static async login(email: string, password: string): Promise<AxiosResponse<IAuthResponse>> {
        return $api.post<IAuthResponse>('/auth/login', {email, password})
    }

    static async registration(user: IUser, password: string): Promise<AxiosResponse<IAuthResponse>> {
        return $api.post<IAuthResponse>('/auth/register', {...user, password})
    }

    static async logout(): Promise<void> {
        return $api.post('/auth/logout')
    }

    static async sendCode(email: string): Promise<AxiosResponse<string>> {
        return $api.post<string>('/auth/activate', {email})
    }

    static async checkEmail(email: string): Promise<AxiosResponse<boolean>> {
        return $api.post<boolean>('auth/check', {email})
    }
}