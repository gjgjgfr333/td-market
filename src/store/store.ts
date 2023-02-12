import {combineReducers, configureStore} from "@reduxjs/toolkit";
import locationReducer from './reducers/LocationSlice';
import categoriesReducer from './reducers/categories/CategoriesSlice'

const rootReducer = combineReducers({
    locationReducer,
    categoriesReducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']