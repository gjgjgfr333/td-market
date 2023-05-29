import React from 'react';
import Header from "../components/headers/header/Header";
import Container from "../components/container/Container";
import Footer from "../components/footers/footer-user/Footer";
import BoxGood from "../components/boxes/box-good/BoxGood";

const Good = () => {
    return (
        <div>
            <Header/>
            <Container>
                <BoxGood/>
            </Container>
            <Footer/>
        </div>
    );
};

export default Good;
