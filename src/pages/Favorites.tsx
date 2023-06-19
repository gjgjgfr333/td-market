import React, {useEffect} from 'react';
import Header from "../components/headers/header/Header";
import Container from "../components/container/Container";
import BoxFavorites from "../components/boxes/box-favorites/BoxFavorites";
import {useAppSelector} from "../hooks/redux";
import {useNavigate} from "react-router-dom";
import Footer from "../components/footers/footer-user/Footer";

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
            <Footer/>
        </div>
    );
};

export default Favorites;
