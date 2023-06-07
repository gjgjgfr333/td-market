import React from 'react';
import '../header-req-shelter/header-reg-shelter.scss'
import './header-shelter.scss'
import {Link, useNavigate} from "react-router-dom";
import Container from "../../container/Container";

import { useLocation } from 'react-router-dom';
import {useAppSelector} from "../../../hooks/redux";

// Остальной код компонента...

const HeaderShelter = () => {
    const {shelter} = useAppSelector(state => state.shelterReducer)
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
        <header className={'header-shelter'}>
            <Container>
                <div className={'header-shelter__wrapper'}>
                    <div className={'shelter-tools'}>
                        <div className={'shelter-tools__header'}>
                            <div className={'shelter-tools__name'}>
                                <p className={'name-market'}>
                                    {shelter.shop?.nameMarket}
                                </p>
                                <p className={'isIndividual-name'}>
                                    {(shelter.shelterData?.entity.isIndividual ? 'ИП ' : 'Ю.л ') + shelter.name}
                                </p>
                            </div>
                            <div className={'shelter-icon'}>
                                <img src={shelter.imageShop} alt=""/>
                            </div>
                        </div>
                        <div className={'shelter-tools__buttons'}>
                            <Link to={'/'}>
                                <img src="" alt=""/>
                                <span>Уведомления</span>
                            </Link>
                            <Link to={'/'}>
                                <img src="" alt=""/>
                                <span>Личные данные</span>
                            </Link>
                            <Link to={'/'}>
                                <img src="" alt=""/>
                                <span>Данные магазина</span>
                            </Link>
                            <Link to={'/'}>
                                <img src="" alt=""/>
                                <span>Смена пароля</span>
                            </Link>
                            <Link to={'/'}>
                                <img src="" alt=""/>
                                <span>Выйти</span>
                            </Link>
                        </div>
                    </div>

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
                </div>

            </Container>
        </header>
    );
};

export default HeaderShelter;

