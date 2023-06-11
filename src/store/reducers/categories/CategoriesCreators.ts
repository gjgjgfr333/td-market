import {AppDispatch} from "../../store";
import axios from "axios";
import {ICategory} from "../../../models/ICategories";
import {categoriesSlice} from "./CategoriesSlice";

export const fetchCategories = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(categoriesSlice.actions.categoriesFetching())
        const response = await axios.get<ICategory[]>('https://localhost:5000/categories')
        dispatch(categoriesSlice.actions.categoriesFetchingSuccess(response.data))
    } catch (e: any) {
        console.log('e', e)
        dispatch(categoriesSlice.actions.categoriesFetchingError(e.message))
    }
}