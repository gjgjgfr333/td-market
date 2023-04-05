import React, {useEffect} from 'react';
import './App.css';
import {checkAuth} from "./store/reducers/user/UserCreators";
import MainPage from "./pages/MainPage";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RegistrShelter from "./pages/RegistrShelter";
import LoginShelter from "./pages/LoginShelter";
import RegistrData from "./pages/RegistrData";

function App() {
    useEffect(() => {
        if (localStorage.getItem('token')) {
            checkAuth()
        }
    }, [])

    const router = createBrowserRouter([
        {
            path: '/',
            element: <MainPage/>,
        },
        {
            path: '/registration',
            element: <RegistrShelter/>,
        },
        {
            path: '/login',
            element: <LoginShelter/>,
        },
        {
            path: '/registration-next',
            element: <RegistrData/>,
        },
    ])

  return (
    <div className="App">
        <RouterProvider router={router}/>
    </div>
  );
}

export default App;
