import React, {useState} from 'react';
import '../header-req-shelter/header-reg-shelter.scss'
import './header-shelter.scss'
import {Link} from "react-router-dom";
import Container from "../../container/Container";

const HeaderShelter = () => {
    const links = [
        {
            href: '/shelter',
            name: 'Главная',
        },
        {
            href: '/shelter',
            name: 'Мои заказы',
        },
        {
            href: '/shelter/goods',
            name: 'Мои товары',
        },
        {
            href: '/shelter',
            name: 'Статистика',
        },
        {
            href: '/shelter',
            name: 'Оформить подписку',
        },
    ]

    const [activeLink, setActiveLink] = useState(0)

    const onClickLink = (index: number) => {
        setActiveLink(index)
    }

    return (
        <header className={'header-reg'}>
            <Container>
                <div className={'links'}>
                    {
                        links.map((link, index) => (
                            <Link className={`links__item ${activeLink === index && 'active'}`}
                                  to={link.href}
                                  key={index}
                                  onClick={() => onClickLink(index)}>
                                {link.name}
                            </Link>
                        ))
                    }
                </div>
            </Container>

        </header>
    );
};

export default HeaderShelter;