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

export const registrationShelter = (data: IShelter, photo: File) => async (dispatch: AppDispatch) => {
    try {
        console.log('data', data)
        dispatch(shelterSlice.actions.loginFetching())
        const formData = new FormData()
        formData.append('photo', photo)
        Object.keys(data).forEach(key => {
            // @ts-ignore
            if (!(typeof data[key] === 'string')) {
                // @ts-ignore
                formData.append(key, JSON.stringify(data[key]))
            } else { // @ts-ignore
                formData.append(key, data[key])
            }
        })
        const response = await AuthShelterService.registrationShelter(formData)
        localStorage.setItem('token-shelter', response.data.accessToken)
        dispatch(shelterSlice.actions.setAuth(true))
        dispatch(shelterSlice.actions.setShelter(response.data.shelter))
        dispatch(shelterSlice.actions.setIsRegistry())
        dispatch(shelterSlice.actions.loginSuccess())
    } catch (e: any) {
        console.log('e', e)
        dispatch(shelterSlice.actions.loginFetchingError(e.message))
        dispatch(shelterSlice.actions.setIsRegistry())
    }
}

export const loginShelter = (email: string, password: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(shelterSlice.actions.loginFetching())
        const response = await AuthShelterService.login(email, password)
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