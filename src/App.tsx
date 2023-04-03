import React, {useEffect} from 'react';
import './App.css';
import {checkAuth} from "./store/reducers/user/UserCreators";
import MainPage from "./pages/MainPage";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RegistrShelter from "./pages/RegistrShelter";

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
        }
    ])

  return (
    <div className="App">
        <RouterProvider router={router}/>
    </div>
  );
}

export default App;
