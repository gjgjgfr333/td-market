import React from 'react';
import SearchCards from "../components/cards-modules/search-cards/SearchCards";
import Container from "../components/container/Container";
import MobileNavbar from "../components/mobile-navbar/MobileNavbar";
import BoxCategory from "../components/boxes/box-category/BoxCategory";

const SearchPage = () => {
    return (
        <div>
            <MobileNavbar/>
            <Container>
                <BoxCategory>
                    <SearchCards/>
                </BoxCategory>
            </Container>
        </div>
    );
};

export default SearchPage;
