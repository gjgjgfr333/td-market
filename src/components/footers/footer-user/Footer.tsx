import React from 'react';
import './footer.scss';
import Container from "../../container/Container";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className={'footer'}>
            <Container>
                <div className={'footer__wrapper'}>
                    <div className={'footer__column'}>
                        <h3 className={'footer__title'}>Покупателям</h3>
                        <Link to={'/'} className={'footer__link'}>Как сделать покупку</Link>
                        <Link to={'/'} className={'footer__link'}>Возврат товара</Link>
                        <Link to={'/'} className={'footer__link'}>Возврат денежных товаров</Link>
                        <Link to={'/'} className={'footer__link'}>Поддержка</Link>
                    </div>
                    <div className={'footer__column'}>
                        <h3 className={'footer__title'}>Продавцам</h3>
                        <Link to={'/'} className={'footer__link'}>Продавайте на td-market</Link>
                        <Link to={'/'} className={'footer__link'}>Личный кабинет продавца</Link>
                        <Link to={'/'} className={'footer__link'}>Документация</Link>
                    </div>
                    <div className={'footer__column'}>
                        <h3 className={'footer__title'}>Компания</h3>
                        <Link to={'/'} className={'footer__link'}>О нас</Link>
                        <Link to={'/'} className={'footer__link'}>Вопрос - ответ</Link>
                        <Link to={'/'} className={'footer__link'}>Договор публичной оферты</Link>
                    </div>
                    <div className={'footer__column'}>
                        <h3 className={'footer__title'}>Мы в соцсетях</h3>
                        <div className={'footer__icons'}>
                            <a href={'/'} target={"_blank"} rel="noreferrer">
                                <img src="/images/svg/telegram.svg" alt="Telegram"/>
                            </a>
                            <a href={'/'} target={"_blank"} rel="noreferrer">
                                <img src="/images/svg/instagram.svg" alt="Instagram"/>
                            </a>
                            <a href={'/'} target={"_blank"} rel="noreferrer">
                                <img src="/images/svg/wk.svg" alt="Wk"/>
                            </a>
                        </div>
                        <p className={'footer__text'}>Информация, предоставленная на сайте, не является публичной офертой. Все права защищены.</p>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
