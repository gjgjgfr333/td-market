import React from 'react';
import Header from "../components/header/Header";
import Container from "../components/container/Container";
import Slider from "../components/slider/Slider";
import SpeciallyCards from "../components/cards-modules/specially-cards/SpeciallyCards";
import Footer from "../components/footer/Footer";

const MainPage = () => {
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