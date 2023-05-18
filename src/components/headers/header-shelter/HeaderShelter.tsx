import React, {useState} from 'react';
import '../header-req-shelter/header-reg-shelter.scss'
import './header-shelter.scss'
import {Link, useNavigate} from "react-router-dom";
import Container from "../../container/Container";

import { useLocation } from 'react-router-dom';

// Остальной код компонента...

const HeaderShelter = () => {
    const navigation = useNavigate()
    const location = useLocation()

    const links = [
        {
            href: '/shelter/main',
            name: 'Главная',
        },
        {
            href: '/shelter/orders',
            name: 'Мои заказы',
        },
        {
            href: '/shelter/goods',
            name: 'Мои товары',
        },
        {
            href: '/shelter/statistics',
            name: 'Статистика',
        },
        {
            href: '/shelter/subscription',
            name: 'Оформить подписку',
        },
    ]

    const findActiveLinkIndex = () => {
        const currentPath = location.pathname;
        for (let i = 0; i < links.length; i++) {
            const link = links[i];
            if (currentPath === link.href || currentPath.startsWith(link.href + '/')) {
                return i;
            }
        }
        return -1;
    }

    const activeLinkIndex = findActiveLinkIndex();

    const onClickLink = (index: number, link: string) => {
        navigation(link)
    }

    return (
        <header className={'header-reg'}>
            <Container>
                <div className={'links'}>
                    {links.map((link, index) => (
                        <Link
                            className={`links__item ${activeLinkIndex === index && 'active'}`}
                            to={link.href}
                            key={index}
                            onClick={() => onClickLink(index, link.href)}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </Container>
        </header>
    );
};

export default HeaderShelter;

