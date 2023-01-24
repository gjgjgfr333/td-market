import React from 'react';
import './header.scss'
import Container from "../container/Container";
import Geolocation from "../geolocation/Geolocation";

const Header = () => {
    return (
        <header className={'header'}>
            <Container>
                <div className={'header__row-1'}>
                    <Geolocation/>
                    <a href="/">Часто задаваемые вопросы</a>
                </div>
            </Container>
        </header>
    );
}

export default Header;