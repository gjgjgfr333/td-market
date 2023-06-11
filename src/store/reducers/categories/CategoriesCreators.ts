import {AppDispatch} from "../../store";
import axios from "axios";
import {ICategory} from "../../../models/ICategories";
import {categoriesSlice} from "./CategoriesSlice";

export const fetchCategories = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(categoriesSlice.actions.categoriesFetching())
        const endpoint = process.env.REACT_APP_API_ENDPOINT;
        const response = await axios.get<ICategory[]>(`${endpoint}/categories`);
        dispatch(categoriesSlice.actions.categoriesFetchingSuccess(response.data))
    } catch (e: any) {
        console.log('e', e)
        dispatch(categoriesSlice.actions.categoriesFetchingError(e.message))
    }
}