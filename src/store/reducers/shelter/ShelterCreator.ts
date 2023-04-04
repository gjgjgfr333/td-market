import {AppDispatch} from "../../store";
import {AuthService} from "../../../services/AuthService";
import {shelterSlice} from "./ShelterSlice";

export const sendCodeShelter = (email: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(shelterSlice.actions.loginFetching())
        const response = await AuthService.sendCode(email)
        console.log('response',response)
        dispatch(shelterSlice.actions.setActivationCode(response.data))
        dispatch(shelterSlice.actions.loginSuccess())
    } catch (e: any) {
        console.log('e', e)
        dispatch(shelterSlice.actions.loginFetchingError(e.message))
    }
}