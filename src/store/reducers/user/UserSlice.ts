import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
    user: {},
    isUserModal: false,
    isAuth: false,
    isLoading: false,
    error: '',
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

        changeIsUserModal: (state, action: PayloadAction<boolean>) => {
            state.isUserModal = action.payload
        },

        setAuth: (state, action: PayloadAction<boolean>) => {
            state.isAuth = action.payload
        },

        setUser: (state, action) => {
            state.user = action.payload
        },
    }
})

export default userSlice.reducer