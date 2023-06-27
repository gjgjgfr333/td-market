import React, {useEffect} from 'react';
import Header from "../components/headers/header/Header";
import Container from "../components/container/Container";
import BoxFavorites from "../components/boxes/box-favorites/BoxFavorites";
import {useNavigate} from "react-router-dom";
import Footer from "../components/footers/footer-user/Footer";
import {getAccessTokenUser} from "../utils/tokens";
import HotCards from "../components/cards-modules/hot-cards/HotCards";
import NewCards from "../components/cards-modules/new-cards/NewCards";

const Favorites = () => {
    const navigation = useNavigate()

    useEffect(() => {
        if (!getAccessTokenUser()) navigation('/')
    }, [ navigation])

    return (
        <div>
            <Header/>
            <Container>
                <BoxFavorites/>
                <HotCards limit={6}/>
                <NewCards limit={6}/>
            </Container>
            <Footer/>
        </div>
    );
};

export default Favorites;
