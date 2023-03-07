import React, {useEffect} from 'react';
import './App.css';
import Header from "./components/header/Header";
import {checkAuth} from "./store/reducers/user/UserCreators";

function App() {
    useEffect(() => {
        if (localStorage.getItem('token')) {
            checkAuth()
        }
    }, [])

  return (
    <div className="App">
      <Header/>
    </div>
  );
}

export default App;
