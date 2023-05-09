import React from 'react';
import Header from "../components/headers/header/Header";
import Container from "../components/container/Container";
import Slider from "../components/slider/Slider";
import SpeciallyCards from "../components/cards-modules/specially-cards/SpeciallyCards";
import Footer from "../components/footer/Footer";
import {useAppSelector} from "../hooks/redux";
import {Navigate} from "react-router-dom";

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
                <SpeciallyCards/>
            </Container>
            <Footer/>
        </div>
    );
};

export default MainPage;