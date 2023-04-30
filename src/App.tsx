import React, {useEffect} from 'react';
import './App.css';
import {checkAuth} from "./store/reducers/user/UserCreators";
import MainPage from "./pages/MainPage";
import {
    BrowserRouter,
    redirect,
    Route,
    Routes,
} from "react-router-dom";
import RegistrShelter from "./pages/RegistrShelter";
import LoginShelter from "./pages/LoginShelter";
import RegistrData from "./pages/RegistrData";
import Shelter from "./pages/Shelter";
import ShelterGoods from "./pages/ShelterGoods";
import CreateGood from "./pages/CreateGood";
import RegistrShop from "./pages/RegistrShop";
import {useAppSelector} from "./hooks/redux";

function App() {
    const {isRegistered} = useAppSelector(state => state.shelterReducer)

    useEffect(() => {
        if (localStorage.getItem('token')) {
            checkAuth()
        }

        if (localStorage.getItem('token-shelter')) {
            checkAuth()
        }
    }, [])

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<MainPage />} />
                    <Route path={'/registration'} element={<RegistrShelter />} />
                    <Route path={'/login'} element={<LoginShelter />} />
                    <Route
                        path={'/registration-next'}
                        element={<RegistrData />}
                        loader={() => {
                            if (!isRegistered) {
                                throw redirect('/registration');
                            } else return null;
                        }}
                    />
                    <Route path={'/registration-shop'} element={<RegistrShop />} />
                    <Route
                        path={'/shelter/'}
                        element={<Shelter />}
                        loader={() => {
                            if (!localStorage.getItem('token-shelter')) {
                                throw redirect('/login');
                            } else return null;
                        }}
                    >
                        <Route index path={'goods'} element={<ShelterGoods />} />
                        <Route index path={'goods/create'} element={<CreateGood />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
