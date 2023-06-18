import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "../../../models/response/IUser";
import {getAccessTokenUser} from "../../../utils/tokens";

const initialState = {
    user: {} as IUser,
    isUserModal: false,
    isAuth: false,
    isLoading: false,
    activationCode: '',
    error: '',
    accessToken: getAccessTokenUser(),
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginFetching(state) {
            state.isLoading = true
        },

        loginSuccess(state) {
            state.isLoading = true
        },

        loginFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload
        },

        loginCleanError(state) {
            state.isLoading = true
            state.error = ''
        },

        changeIsUserModal: (state, action: PayloadAction<boolean>) => {
            state.isUserModal = action.payload
        },

        setAuth: (state, action: PayloadAction<boolean>) => {
            state.isAuth = action.payload
        },

        setUser: (state, action: PayloadAction<IUser>) => {
            state.user = action.payload
        },

        setEmailUser: (state, action: PayloadAction<string>) => {
            state.user.email = action.payload
        },

        setNameUser: (state, action: PayloadAction<{name: string, family: string}>) => {
            state.user.firstName = action.payload.name
            state.user.secondName = action.payload.family
        },
        setActivationCode: (state, action: PayloadAction<string>) => {
            state.activationCode = action.payload
        }
    }
})

export default userSlice.reducer