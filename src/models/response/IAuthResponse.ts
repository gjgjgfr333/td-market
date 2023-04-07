import {IUser} from "./IUser";
import {IShelter} from "./IShelter";

export interface IAuthResponse {
    accessToken: string,
    refreshToken: string,
    user: IUser
}

export interface IAuthShelterResponse {
    accessToken: string,
    refreshToken: string,
    shelter: IShelter
}