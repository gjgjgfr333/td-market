import {AxiosResponse} from "axios";
import {IUser} from "../models/response/IUser";
import $api from "../http";
import {IProductCard} from "../models/IProductCard";
import {ICart} from "../models/ICart";

export class UserService {
    static async fetchUser(): Promise<AxiosResponse<IUser[]>> {
        return $api.post<IUser[]>('/auth/users')
    }

    static addToFavorites(goodId: string): Promise<AxiosResponse<boolean>> {
        return $api.get<boolean>(`users/favorites/${goodId}`)
    }

    static getFavorites(): Promise<AxiosResponse<IProductCard[]>> {
        return $api.get<IProductCard[]>(`users/favorites-get/`)
    }

    static addToCart(goodId: ICart): Promise<AxiosResponse<boolean>> {
        return $api.post<boolean>(`users/addToCart`, {

        })
    }

    static async getUser(): Promise<AxiosResponse<IUser>> {
        return $api.get<IUser>(`users/get-user`)
    }
}
