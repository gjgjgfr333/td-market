import React, {useEffect} from 'react';
import Header from "../components/headers/header/Header";
import Container from "../components/container/Container";
import BoxFavorites from "../components/boxes/box-favorites/BoxFavorites";
import {useAppSelector} from "../hooks/redux";
import {useNavigate} from "react-router-dom";

const Favorites = () => {
    const navigation = useNavigate()
    const accessToken = useAppSelector((state) => state.userReducer.accessToken);

    useEffect(() => {
        if (!accessToken) navigation('/')
    }, [accessToken, navigation])

    return (
        <div>
            <Header/>
            <Container>
                <BoxFavorites/>
            </Container>
        </div>
    );
};

export default Favorites;
