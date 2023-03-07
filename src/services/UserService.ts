import {AxiosResponse} from "axios";
import {IUser} from "../models/response/IUser";
import $api from "../http";

export class UserService {
    static async fetchUser(): Promise<AxiosResponse<IUser[]>> {
        return $api.post<IUser[]>('/auth/users')
    }
}