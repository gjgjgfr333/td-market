import React from 'react';
import './header.scss'
import Container from "../container/Container";
import Geolocation from "../geolocation/Geolocation";
import Menu from "../menu/Menu";
import Search from "../search/Search";

const Header = () => {
    return (
        <header className={'header'}>
            <Container>
                <div className={'header__row-1'}>
                    <Geolocation/>
                    <a href="/">Часто задаваемые вопросы</a>
                </div>
                <div className={'header__row-2'}>
                    <Menu/>
                    <div className={'logo'}/>
                    <Search/>
                </div>
                <div className={'link-icon'}>
                    <a href="">

                    </a>
                </div>
            </Container>
        </header>
    );
}

export default Header;