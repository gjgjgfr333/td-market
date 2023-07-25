import React, {useEffect} from 'react';
import {useAppSelector} from "../hooks/redux";
import Header from "../components/headers/header/Header";
import {useNavigate} from "react-router-dom";
import {isObjectEmpty} from "../utils/isObjectEmpty";

const Admin = () => {
    const navigation = useNavigate()
    const {user} = useAppSelector((state) => state.userReducer);

    useEffect(() => {
        if (!isObjectEmpty(user)) {
            if (!(user.role === 'ADMIN' && user.email === 'tabakevgenijj@gmail.com')) {
                navigation('/')
            }
        }

    }, [navigation, user])

    return (
        <div>
            <div style={{display: 'none'}}>
                <Header/>
            </div>
        </div>
    );
};

export default Admin;