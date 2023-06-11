import {AppDispatch} from "../../store";
import axios from "axios";
import {ICategory} from "../../../models/ICategories";
import {categoriesSlice} from "./CategoriesSlice";
import * as https from "https";

export const fetchCategories = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(categoriesSlice.actions.categoriesFetching())
        const response = await axios.get<ICategory[]>('https://45.84.0.197:5000/categories', {
            // Необязательно, но может понадобиться, чтобы пропустить проверку сертификата
            httpsAgent: new https.Agent({ rejectUnauthorized: false })
        });
        dispatch(categoriesSlice.actions.categoriesFetchingSuccess(response.data))
    } catch (e: any) {
        console.log('e', e)
        dispatch(categoriesSlice.actions.categoriesFetchingError(e.message))
    }
}