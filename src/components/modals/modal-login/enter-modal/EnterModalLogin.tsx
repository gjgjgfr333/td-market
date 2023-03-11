import React, {ChangeEvent, useState} from 'react';
import './enter-modal-login.scss'
import {TVisibility} from "../../../../models/types";
import {useAppDispatch, useAppSelector} from "../../../../hooks/redux";
import {loginUser} from "../../../../store/reducers/user/UserCreators";

const EnterModalLogin = () => {
    const dispatch = useAppDispatch()
    const {email} = useAppSelector(state => state.userReducer.user)
    const [password, setPassword] = useState('')
    const [visibilityPassword, setVisibilityPassword] = useState<TVisibility>('password')
    const [error, setError] = useState(false)

    const onSwitchVisibility = () => {
        setVisibilityPassword(visibilityPassword === 'password' ? 'text' : 'password')
    }

    const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    const onFinishLogin = () => {
        dispatch(loginUser(email, password))
    }

    return (
        <div className={'enterModal'}>
            <h3 className={'userAuthModal__title'}>Введите пароль</h3>
            <div className={'userAuthModal__form enterModal__form'}>
                {error && <p className={'warningLogin enterModal__warningLogin'}>
                    Вы ввели неправильный пароль
                </p>}
                <input
                    id={'repeatPasswordInput'}
                    className={`modalInput enterModal__password`}
                    type={visibilityPassword}
                    value={password}
                    onChange={onChangePassword}
                />
                <img
                    src={'/images/svg/open-eye.svg'}
                    className={'img enterModal__img'}
                    alt={''}
                    onClick={onSwitchVisibility}
                />
                <a className={'userAuthModal__label'} href={'/'}>Забыли пароль?</a>
            </div>
            <button className={'button button_dark'} onClick={onFinishLogin}>ВОЙТИ</button>
        </div>
    );
};

export default EnterModalLogin;