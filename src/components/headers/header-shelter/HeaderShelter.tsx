import React, {useState} from 'react';
import '../header-req-shelter/header-reg-shelter.scss'
import './header-shelter.scss'
import {Link} from "react-router-dom";

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
            href: '/shelter',
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
            <div className={'links'}>
                {
                    links.map((link, index) => (
                        <Link className={`links__item ${activeLink === index && 'active'}`}
                              to={link.href}
                              onClick={() => onClickLink(index)}>
                            {link.name}
                        </Link>
                    ))
                }
            </div>
        </header>
    );
};

export default HeaderShelter;