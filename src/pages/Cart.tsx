import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {getAccessTokenUser} from "../utils/tokens";
import Header from "../components/headers/header/Header";
import Container from "../components/container/Container";
import BoxCart from "../components/boxes/box-cart/BoxCart";
import MobileNavbar from "../components/mobile-navbar/MobileNavbar";

const Cart = () => {
    const navigation = useNavigate()

    useEffect(() => {
        if (!getAccessTokenUser()) navigation('/')
    }, [navigation])

    return (
        <div>
            <MobileNavbar/>
            <Header/>
            <Container>
                <BoxCart/>
            </Container>
        </div>
    );
};

export default Cart;
