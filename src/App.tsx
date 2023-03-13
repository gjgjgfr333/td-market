import React, {useEffect} from 'react';
import './App.css';
import {checkAuth} from "./store/reducers/user/UserCreators";
import MainPage from "./pages/MainPage";

function App() {
    useEffect(() => {
        if (localStorage.getItem('token')) {
            checkAuth()
        }
    }, [])

  return (
    <div className="App">
        <MainPage/>
    </div>
  );
}

export default App;
