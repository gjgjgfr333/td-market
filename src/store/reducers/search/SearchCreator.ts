import {AppDispatch} from "../../store";
import {categoriesSlice} from "../categories/CategoriesSlice";
import {searchSlice} from "./SearchSlice";
import {GoodsService} from "../../../services/GoodsService";

export const fetchSearch = (query: string, page: number, limit: number) => async (dispatch: AppDispatch) => {
    try {
        dispatch(searchSlice.actions.searchFetching())
        const response = await GoodsService.getSearchGoods(query,page, limit);
        dispatch(searchSlice.actions.searchFetchingSuccess(response.data.productCards))
    } catch (e: any) {
        console.log('e', e)
        dispatch(categoriesSlice.actions.categoriesFetchingError(e.message))
    }
}
