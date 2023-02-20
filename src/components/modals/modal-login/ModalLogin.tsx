import React from 'react';
import './modal-login.scss'
import Cover from "../../cover/Cover";
import {useAppDispatch} from "../../../hooks/redux";
import {userSlice} from "../../../store/reducers/user/UserSlice";

const ModalLogin = () => {
    const {changeIsUserModal} = userSlice.actions
    const dispatch = useAppDispatch()

    const closeUserModal = () => {
        dispatch(changeIsUserModal(false))
    }

    return (
        <>
            <div className={'modalLogin'}>
                <h3 className={'modalLogin__title'}>Войти или создать аккаунт</h3>
                <input type="email" className={'modalLogin__email'} placeholder={'E-mail...'}/>
                <button className={'button modalLogin__enter'}>ВОЙТИ</button>
                <button className={'button modalLogin__registry'}>ЗАРЕГИСТРИРОВАТЬСЯ</button>
            </div>
            <Cover callback={closeUserModal}/>
        </>
    );
};

export default ModalLogin;