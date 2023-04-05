import React from 'react';
import Container from "../../container/Container";
import '../header-req-shelter/header-reg-shelter.scss'
import './header-reg-data.scss'

const HeaderRegData = () => {
    return (
        <header className={'header-reg'}>
            <Container>
                <div className={'header-reg-_data'}>
                    <h2>Личные данные</h2>
                    <button className={'button button_light header-reg__button'}>СОХРАНИТЬ</button>
                </div>
            </Container>
        </header>
    );
};

export default HeaderRegData;