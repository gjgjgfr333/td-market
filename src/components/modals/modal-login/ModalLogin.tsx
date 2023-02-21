import React, {useState} from 'react';
import './modal-login.scss'
import Cover from "../../cover/Cover";
import {useAppDispatch} from "../../../hooks/redux";
import {userSlice} from "../../../store/reducers/user/UserSlice";

const ModalLogin = () => {
    const {changeIsUserModal} = userSlice.actions
    const dispatch = useAppDispatch()

    const [isAgree, setIsAgree] = useState(false)

    const onRegistry = () => {
        if (!isAgree) return
    }

    const onAgreeRules = () => {
        setIsAgree(!isAgree)
    }

    const closeUserModal = () => {
        dispatch(changeIsUserModal(false))
    }

    return (
        <>
            <div className={'modalLogin'}>
                <h3 className={'modalLogin__title'}>Войти или создать аккаунт</h3>
                <input type="email" className={'modalLogin__email'} placeholder={'E-mail...'}/>
                <button className={'button modalLogin__enter'}>ВОЙТИ</button>
                <button className={'button modalLogin__registry'} onClick={onRegistry}>ЗАРЕГИСТРИРОВАТЬСЯ</button>
                <div className={'modalLogin__row'}>
                    <input type={'checkbox'} className={'modalLogin__checkBox'} onChange={onAgreeRules}/>
                    <p className={'modalLogin__conditions'}>
                        Согласен с условиями, <a href={'/'} className={'modalLogin__link'}>правилами возврата</a> и
                        <a href="/" className={'modalLogin__link'}> правилами пользования торговой площадкой</a>.
                    </p>
                </div>
            </div>
            <Cover callback={closeUserModal}/>
        </>
    );
};

export default ModalLogin;