import React from 'react';
import './footer.scss';
import Container from "../container/Container";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className={'footer'}>
            <Container>
                <div className={'footer__column'}>
                    <h3>Покупателю</h3>
                    <Link to={'/'}>Как сделать покупку</Link>
                    <Link to={'/'}>Возврат товара</Link>
                    <Link to={'/'}>Возврат денежных товаров</Link>
                    <Link to={'/'}>Поддержка</Link>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;