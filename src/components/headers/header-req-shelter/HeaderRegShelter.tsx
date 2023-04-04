import React from 'react';
import Container from "../../container/Container";
import './header-reg-shelter.scss'
import {Link} from "react-router-dom";

const HeaderRegShelter = () => {
    return (
            <header className={'header-reg'}>
                <Container>
                    <div className={'header-reg__content'}>
                        <div>Уже есть аккаунт?</div>
                        <Link  to={'/login'} className={'button button_light header-reg__button'}>Войти</Link>
                    </div>
                </Container>
            </header>
    );
};

export default HeaderRegShelter;