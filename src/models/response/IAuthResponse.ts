import {IUser} from "./IUser";
import {IShelterRes} from "./IShelter";

export interface IAuthResponse {
    accessToken: string,
    refreshToken: string,
    user: IUser
}

export interface IAuthShelterResponse {
    accessToken: string,
    refreshToken: string,
    shelter: IShelterRes
}

export interface IAuthShelter {
    shelter: IShelterRes,
    token: string
}