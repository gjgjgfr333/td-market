import {AppDispatch} from "../../store";

import {userSlice} from "./UserSlice";
import {AuthService} from "../../../services/AuthService";
import {IUser} from "../../../models/response/IUser";
import axios from "axios";
import {IAuthResponse} from "../../../models/response/IAuthResponse";
import {API_URL} from "../../../http";

export const loginUser = (email: string, password: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(userSlice.actions.loginFetching())
        const response = await AuthService.login(email, password)
        localStorage.setItem('token', response.data.accessToken)
        dispatch(userSlice.actions.setAuth(true))
        dispatch(userSlice.actions.setUser(response.data.user))
        dispatch(userSlice.actions.loginSuccess())
    } catch (e: any) {
        console.log('e', e)
        dispatch(userSlice.actions.loginFetchingError(e.message))
    }
}

export const registrationUser = (email: string, password: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(userSlice.actions.loginFetching())
        const response = await AuthService.registration(email, password)
        localStorage.setItem('token', response.data.accessToken)
        dispatch(userSlice.actions.setAuth(true))
        dispatch(userSlice.actions.setUser(response.data.user))
        dispatch(userSlice.actions.loginSuccess())
    } catch (e: any) {
        console.log('e', e)
        dispatch(userSlice.actions.loginFetchingError(e.message))
    }
}

export const logout = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(userSlice.actions.loginFetching())
        await AuthService.logout()
        localStorage.removeItem('token')
        dispatch(userSlice.actions.setAuth(false))
        dispatch(userSlice.actions.setUser({} as IUser))
        dispatch(userSlice.actions.loginSuccess())
    } catch (e: any) {
        console.log('e', e)
        dispatch(userSlice.actions.loginFetchingError(e.message))
    }
}

export const checkAuth = () => async (dispatch: AppDispatch) => {
    try {
        const response = await axios.get<IAuthResponse>(`${API_URL}/refresh`, {withCredentials: true})
        localStorage.removeItem('token')
        localStorage.setItem('token', response.data.accessToken)
        dispatch(userSlice.actions.setAuth(true))
        dispatch(userSlice.actions.setUser(response.data.user))
    } catch (e: any) {
        console.log('e', e)
        dispatch(userSlice.actions.loginFetchingError(e.message))
    }
}

export const sendCode = (email: string) => async (dispatch: AppDispatch) => {
    try {
        const response = await AuthService.sendCode(email)
        dispatch(userSlice.actions.setActivationCode(response.data))
    } catch (e: any) {
        console.log('e', e)
        dispatch(userSlice.actions.loginFetchingError(e.message))
    }
}