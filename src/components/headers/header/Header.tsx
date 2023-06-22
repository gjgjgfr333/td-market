import React, {useEffect} from 'react';
import './header.scss'
import Container from "../../container/Container";
import Geolocation from "../../geolocation/Geolocation";
import Menu from "../../menu/Menu";
import Search from "../../search/Search";
import UserSvg from "../../svg/UserSvg";
import ModalLogin from "../../modals/modal-login/ModalLogin";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {userSlice} from "../../../store/reducers/user/UserSlice";
import {Link} from "react-router-dom";
import FavoritesSvg from "../../svg/FavoritesSvg";
import ShoppingSvg from "../../svg/ShoppingSvg";
import {getAccessTokenUser} from "../../../utils/tokens";
import {isObjectEmpty} from "../../../utils/isObjectEmpty";
import {getUser} from "../../../store/reducers/user/UserCreators";
import UserTools from "../../tools/user-tools/UserTools";

const Header = () => {
    const dispatch = useAppDispatch()
    const {isUserModal, user} = useAppSelector(state => state.userReducer)
    const {changeIsUserModal} = userSlice.actions
    const {categories} = useAppSelector(state => state.categoriesReducer)

    useEffect(() => {
        if ((localStorage.getItem('access_token_user') !== null) && isObjectEmpty(user)) {

            dispatch(getUser())
        }
    }, [dispatch, user])

    const openUserModal = () => dispatch(changeIsUserModal(true))

    return (
        <header className={'header'}>
            <Container>
                <div className={'header__row-1'}>
                    <Geolocation/>
                    <div className={'header__links'}>
                        <Link className={'header__registry'} to={'registration'}>Продавайте на td-market</Link>
                        <Link to="/">Часто задаваемые вопросы</Link>
                    </div>
                </div>
                <div className={'header__row-2'}>
                    <Menu/>
                    <Link to={'/'} className={'logo'}/>
                    <Search/>
                    <Link to={'/favorites'} className={'link-icon'}>
                        <FavoritesSvg/>
                    </Link>
                    <div className={'link-icon'}>
                        <ShoppingSvg/>
                    </div>
                    {!getAccessTokenUser() && <div onClick={openUserModal} className={'link-icon'}>
                        <UserSvg/>
                    </div>}
                    {getAccessTokenUser() && !isObjectEmpty(user) && <UserTools/>}
                    {isUserModal && <ModalLogin/>}
                </div>
                <div className={'header__row-3'}>
                    {categories.map((category) => (
                        <Link key={category.name} to={`/category/${category._id}`}>{category.name}</Link>
                    ))}
                </div>
            </Container>
        </header>
    );
}

export default Header;
