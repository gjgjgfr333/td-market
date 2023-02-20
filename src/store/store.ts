import {combineReducers, configureStore} from "@reduxjs/toolkit";
import locationReducer from './reducers/LocationSlice';
import categoriesReducer from './reducers/categories/CategoriesSlice'
import userReducer from './reducers/user/UserSlice'

const rootReducer = combineReducers({
    locationReducer,
    categoriesReducer,
    userReducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']