import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICategories, ICategory} from "../../../models/ICategories";

const initialState: ICategories = {
    categories: [],
    isLoading: false,
    error: '',
}

export const categoriesSlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        categoriesFetching(state) {
            state.isLoading = true
        },
        categoriesFetchingSuccess(state, action: PayloadAction<ICategory[]>) {
            state.isLoading = false
            state.error = ''
            state.categories = action.payload
        },
        categoriesFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload
        },
    }
})

export default categoriesSlice.reducer