import React from 'react';
import Container from "../../container/Container";
import './header-reg-shelter.scss'

const HeaderRegShelter = () => {
    return (
            <header className={'header-reg'}>
                <Container>
                    <div className={'header-reg__content'}>
                        <div>Уже есть аккаунт?</div>
                        <button className={'button button_light header-reg__button'}>Войти</button>
                    </div>
                </Container>
            </header>
    );
};

export default HeaderRegShelter;