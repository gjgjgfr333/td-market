import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ISearch} from "../../../models/ISearch";
import {IProductCard} from "../../../models/IProductCard";

const initialState: ISearch = {
    cards: [],
    isLoading: false,
    error: '',
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        searchFetching(state) {
            state.isLoading = true
        },
        searchFetchingSuccess(state, action: PayloadAction<IProductCard[]>) {
            state.isLoading = false
            state.error = ''
            state.cards = action.payload
        },
        searchFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload
        },
    }
})

export default searchSlice.reducer
