import React, {useEffect} from 'react';
import Header from "../components/headers/header/Header";
import Container from "../components/container/Container";
import Slider from "../components/slider/Slider";
import Footer from "../components/footers/footer-user/Footer";
import {useAppSelector} from "../hooks/redux";
import {Navigate} from "react-router-dom";
import NewCards from "../components/cards-modules/new-cards/NewCards";
import HotCards from "../components/cards-modules/hot-cards/HotCards";
import CategoryCards from "../components/cards-modules/category-cards/CategoryCards";

const MainPage = () => {
    const accessToken = useAppSelector((state) => state.shelterReducer.accessToken);
    const {categories} = useAppSelector(state => state.categoriesReducer)

    useEffect(() => {
        console.log('Проверка')
    }, [])

    if (accessToken) {
        console.log('isAuthenticated 14', accessToken)
        return <Navigate to="/shelter/main" />;
    }

    return (
        <div>
            <Header/>
            <Container>
                <Slider/>
                <HotCards limit={12}/>
                <NewCards limit={12}/>
                {/*<SpeciallyCards/>*/}
                {categories.filter(category => category.productCards.length > 0).map(category => (
                    <CategoryCards id={category._id} key={category._id} title={category.name}/>
                ))}
            </Container>
            <Footer/>
        </div>
    );
};

export default MainPage;
