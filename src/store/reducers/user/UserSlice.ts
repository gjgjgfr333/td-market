import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isUserModal: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        changeIsUserModal: (state, action) => {
            state.isUserModal = action.payload
        }
    }
})

export default userSlice.reducer