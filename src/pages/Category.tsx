import React from 'react';
import Header from "../components/headers/header/Header";
import Container from "../components/container/Container";
import Footer from "../components/footers/footer-user/Footer";
import BoxCategory from "../components/boxes/box-category/BoxCategory";

const Category = () => {
    return (
        <div>
            <Header/>
            <Container>
                <BoxCategory/>
            </Container>
            <Footer/>
        </div>
    );
};

export default Category;
