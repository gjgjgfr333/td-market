import React from 'react';
import Header from "../components/header/Header";
import Container from "../components/container/Container";
import Slider from "../components/slider/Slider";

const MainPage = () => {
    return (
        <div>
            <Header/>
            <Container>
                <Slider/>
            </Container>
        </div>
    );
};

export default MainPage;