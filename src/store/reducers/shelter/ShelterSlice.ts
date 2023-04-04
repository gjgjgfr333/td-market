import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IFirstShelter, IShelter} from "../../../models/response/IShelter";

const initialState = {
    shelter: {} as IShelter,
    isAuth: false,
    isLoading: false,
    activationCode: '',
    error: '',
}

export const shelterSlice = createSlice({
    name: 'shelter',
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

        // changeIsUserModal: (state, action: PayloadAction<boolean>) => {
        //     state.isUserModal = action.payload
        // },

        setFirstData(state, action: PayloadAction<IFirstShelter>) {
            state.shelter = action.payload
        },

        // setAuth: (state, action: PayloadAction<boolean>) => {
        //     state.isAuth = action.payload
        // },
        //
        // setUser: (state, action: PayloadAction<IUser>) => {
        //     state.user = action.payload
        // },
        //
        setEmailShelter: (state, action: PayloadAction<string>) => {
            state.shelter.email = action.payload
        },

        setPasswordShelter: (state, action: PayloadAction<string>) => {
            state.shelter.email = action.payload
        },

        // setNameUser: (state, action: PayloadAction<{name: string, family: string}>) => {
        //     state.user.firstName = action.payload.name
        //     state.user.secondName = action.payload.family
        // },

        setActivationCode: (state, action: PayloadAction<string>) => {
            state.activationCode = action.payload
        }
    }
})

export default shelterSlice.reducer