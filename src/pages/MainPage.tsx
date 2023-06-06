import React from 'react';
import Header from "../components/headers/header/Header";
import Container from "../components/container/Container";
import Slider from "../components/slider/Slider";
import SpeciallyCards from "../components/cards-modules/specially-cards/SpeciallyCards";
import Footer from "../components/footers/footer-user/Footer";
import {useAppSelector} from "../hooks/redux";
import {Navigate} from "react-router-dom";
import NewCards from "../components/cards-modules/new-cards/NewCards";
import HotCards from "../components/cards-modules/hot-cards/HotCards";

const MainPage = () => {
    const accessToken = useAppSelector((state) => state.shelterReducer.accessToken);

    if (accessToken) {
        console.log('isAuthenticated 14', accessToken)
        return <Navigate to="/shelter" />;
    }

    return (
        <div>
            <Header/>
            <Container>
                <Slider/>
                <HotCards/>
                <NewCards/>
                <SpeciallyCards/>
            </Container>
            <Footer/>
        </div>
    );
};

export default MainPage;
