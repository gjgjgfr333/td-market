import React from 'react';
import Container from "../components/container/Container";
import Footer from "../components/footers/footer-user/Footer";
import BoxCategory from "../components/boxes/box-category/BoxCategory";
import MobileNavbar from "../components/mobile-navbar/MobileNavbar";
import CategoryCards from "../components/cards-modules/category-cards/CategoryCards";

const Category = () => {
    return (
        <div>
            <MobileNavbar/>
            <Container>
                <BoxCategory>
                    <CategoryCards limit={32}/>
                </BoxCategory>
            </Container>
        </div>
    );
};

export default Category;
