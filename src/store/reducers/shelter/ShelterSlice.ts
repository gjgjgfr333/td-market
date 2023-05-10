import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IMainShelter, IShelter} from "../../../models/response/IShelter";
import {getAccessTokenShelter} from "../../../utils/tokens";
import {IDeliveryPoint} from "../../../models/IDeliveryPoint";

const initialState = {
    shelter: {
        deliveryPoints: []
    } as unknown as IShelter,
    isAuth: false,
    isLoading: false,
    activationCode: '',
    error: '',
    isRegistry: false,
    isRegistered: false,
    isAuthenticated: false,
    accessToken: getAccessTokenShelter(),
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

        setIsRegistry(state, action: PayloadAction<boolean>) {
            state.isRegistry = action.payload
        },

        setIsRegistered(state, action: PayloadAction<boolean>) {
            state.isRegistered = action.payload
        },

        // changeIsUserModal: (state, action: PayloadAction<boolean>) => {
        //     state.isUserModal = action.payload
        // },

        setFirstData(state, action: PayloadAction<IMainShelter>) {
            const {email, name, phone, password} = action.payload
            state.shelter.email = email
            state.shelter.name = name
            state.shelter.phone = phone
            state.shelter.password = password
        },

        setAuth: (state, action: PayloadAction<boolean>) => {
            state.isAuth = action.payload
        },

        setShelter: (state, action: PayloadAction<IShelter>) => {
            state.shelter = action.payload
        },

        setEmailShelter: (state, action: PayloadAction<string>) => {
            state.shelter.email = action.payload
        },

        // setPasswordShelter: (state, action: PayloadAction<string>) => {
        //     state.shelter.email = action.payload
        // },

        // setNameUser: (state, action: PayloadAction<{name: string, family: string}>) => {
        //     state.user.firstName = action.payload.name
        //     state.user.secondName = action.payload.family
        // },

        setActivationCode: (state, action: PayloadAction<string>) => {
            state.activationCode = action.payload
        },

        setLoginSuccess: (state, action: PayloadAction<string>) => {
            state.isAuthenticated = true;
            state.accessToken = action.payload;
        },

        setLogoutSuccess: (state) => {
            state.isAuthenticated = false;
            state.accessToken = null
        },

        setDeliveryPoints: (state, action: PayloadAction<IDeliveryPoint[]>) => {
         state.shelter.deliveryPoints = action.payload
        }
    }
})

export default shelterSlice.reducer
