import React from 'react';
import Header from "../components/headers/header/Header";
import Container from "../components/container/Container";
import Footer from "../components/footers/footer-user/Footer";
import BoxGood from "../components/boxes/box-good/BoxGood";
import BoxGoodInformation from "../components/boxes/box-good-information/BoxGoodInformation";

const Good = () => {
    return (
        <div>
            <Header/>
            <Container>
                <BoxGood/>
                <BoxGoodInformation/>
            </Container>
            <Footer/>
        </div>
    );
};

export default Good;
