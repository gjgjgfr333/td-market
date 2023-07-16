import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IMainShelter, IShelterRes} from "../../../models/response/IShelter";
import {getAccessTokenShelter, removeAccessTokenShelter} from "../../../utils/tokens";
import {IDeliveryPoint2} from "../../../models/IDeliveryPoint";

const initialState = {
    shelter: {

    } as IShelterRes,
    isAuth: false,
    isLoading: false,
    activationCode: '',
    error: '',
    isRegistry: false,
    isRegistered: false,
    isAuthenticated: false,
    isCreateGoodCard: true,
    accessToken: getAccessTokenShelter(),
    isHoverTools: false,
    isUpdateCard: false,
    deliveryPoints: [] as IDeliveryPoint2[]
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

        setShelter: (state, action: PayloadAction<IShelterRes>) => {
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

        setDeliveryPoints: (state, action: PayloadAction<IDeliveryPoint2[]>) => {
         state.deliveryPoints = action.payload
        },

        setCreateGoodCard: (state, action: PayloadAction<boolean>) => {
            state.isCreateGoodCard = action.payload
        },

        removeAccessToken: (state) => {
            state.accessToken = null
            removeAccessTokenShelter()
        },

        setIsHoverTools: (state, action: PayloadAction<boolean>) => {
            state.isHoverTools = action.payload
        },
        updateCardSuccess:  (state) => {
            state.isUpdateCard = true
        },
        updateCardFalse:  (state) => {
            state.isUpdateCard = false
        },
    }
})

export default shelterSlice.reducer
