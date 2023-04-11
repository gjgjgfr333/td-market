import React, {useEffect} from 'react';
import './App.css';
import {checkAuth} from "./store/reducers/user/UserCreators";
import MainPage from "./pages/MainPage";
import {createBrowserRouter, createRoutesFromElements, redirect, Route, RouterProvider} from "react-router-dom";
import RegistrShelter from "./pages/RegistrShelter";
import LoginShelter from "./pages/LoginShelter";
import RegistrData from "./pages/RegistrData";
import Shelter from "./pages/Shelter";
import {useAppSelector} from "./hooks/redux";
import ShelterGoods from "./pages/ShelterGoods";

function App() {
    const {isAuth} = useAppSelector(state => state.shelterReducer)

    useEffect(() => {
        if (localStorage.getItem('token')) {
            checkAuth()
        }

        if (localStorage.getItem('token-shelter')) {
            checkAuth()
        }
    }, [])

    // const router = createBrowserRouter([
    //     {
    //         path: '/',
    //         element: <MainPage/>,
    //     },
    //     {
    //         path: '/registration',
    //         element: <RegistrShelter/>,
    //     },
    //     {
    //         path: '/login',
    //         element: <LoginShelter/>,
    //     },
    //     {
    //         path: '/registration-next',
    //         element: <RegistrData/>,
    //     },
    //     {
    //         path: '/shelter',
    //         element: <Shelter/>,
    //     },
    // ])

    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path={'/'} element={<MainPage/>}/>
                <Route path={'/registration'} element={<RegistrShelter/>}/>
                <Route path={'/login'} element={<LoginShelter/>}/>
                <Route path={'/registration-next'} element={<RegistrData/>}/>
                <Route path={'/shelter/'} element={<Shelter/>} loader={() => {
                    if (!isAuth) {
                        throw redirect('/')
                    } else return null
                }}>
                    <Route path={'goods'} element={<ShelterGoods/>} loader={() => {
                        if (!isAuth) {
                            throw redirect('/')
                        } else return null
                    }}/>
                </Route>
            </>
        )
    )

  return (
    <div className="App">
        <RouterProvider router={router}/>
    </div>
  );
}

export default App;
