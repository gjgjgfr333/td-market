import {AppDispatch} from "../../store";
import {AuthService} from "../../../services/AuthService";
import {shelterSlice} from "./ShelterSlice";
import {IShelter} from "../../../models/response/IShelter";
import {AuthShelterService} from "../../../services/AuthShelterService";

export const sendCodeShelter = (email: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(shelterSlice.actions.loginFetching())
        const response = await AuthService.sendCode(email)
        console.log('response', response)
        dispatch(shelterSlice.actions.setActivationCode(response.data))
        dispatch(shelterSlice.actions.loginSuccess())
    } catch (e: any) {
        console.log('e', e)
        dispatch(shelterSlice.actions.loginFetchingError(e.message))
    }
}

export const registrationShelter = (data: IShelter) => async (dispatch: AppDispatch) => {
    try {
        console.log('data', data)
        dispatch(shelterSlice.actions.loginFetching())
        const response = await AuthShelterService.registrationShelter(data)
        console.log('response', response)
        localStorage.setItem('token-shelter', response.data.accessToken)
        dispatch(shelterSlice.actions.setAuth(true))
        dispatch(shelterSlice.actions.setShelter(response.data.shelter))
        dispatch(shelterSlice.actions.loginSuccess())
    } catch (e: any) {
        console.log('e', e)
        dispatch(shelterSlice.actions.loginFetchingError(e.message))
    }
}