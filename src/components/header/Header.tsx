import React, {useEffect, useState} from 'react';
import './header.scss'
import Container from "../container/Container";
import Geolocation from "../geolocation/Geolocation";
import Menu from "../menu/Menu";
import Search from "../search/Search";
import UserSvg from "../svg/UserSvg";
import ModalLogin from "../modals/modal-login/ModalLogin";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {userSlice} from "../../store/reducers/user/UserSlice";

const Header = () => {
    const {isUserModal} = useAppSelector(state => state.userReducer)
    const {changeIsUserModal} = userSlice.actions
    const dispatch = useAppDispatch()

    const openUserModal = () => dispatch(changeIsUserModal(true))

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
                    <div onClick={openUserModal} className={'link-icon'}>
                        <UserSvg/>
                    </div>
                    {isUserModal && <ModalLogin/>}
                </div>

            </Container>
        </header>
    );
}

export default Header;