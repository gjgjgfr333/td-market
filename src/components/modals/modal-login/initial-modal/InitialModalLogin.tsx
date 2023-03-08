import React, {ChangeEvent, Dispatch, SetStateAction, useState} from 'react';
import './initial-modal-login.scss';
import validator from 'validator';
import {useAppDispatch} from "../../../../hooks/redux";
import {userSlice} from "../../../../store/reducers/user/UserSlice";
import {sendCode} from "../../../../store/reducers/user/UserCreators";

const InitialModalLogin = ({setCurrentModal}: {setCurrentModal: Dispatch<SetStateAction<number>>}) => {
    const dispatch = useAppDispatch()
    const {setEmailUser} = userSlice.actions
    const [isAgree, setIsAgree] = useState(false)
    const [email, setEmail] = useState('')

    const changeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const onRegistry = () => {
        if (!isAgree || !validator.isEmail(email)) return
        dispatch(setEmailUser(email))
        dispatch(sendCode(email))
        setCurrentModal(1)
    }

    const onAgreeRules = () => {
        setIsAgree(!isAgree)
    }

    return (
        <div className={'modalLogin'}>
            <h3 className={'modalLogin__title'}>Войти или создать аккаунт</h3>
            <input
                value={email}
                onChange={changeEmail}
                type="email"
                className={'modalInput'}
                placeholder={'E-mail...'}
                autoComplete={'on'}
            />
            <button className={'button button_dark'}>ВОЙТИ</button>
            <button className={'button button_light'} onClick={onRegistry}>ЗАРЕГИСТРИРОВАТЬСЯ</button>
            <div className={'modalLogin__row'}>
                <input type={'checkbox'} className={'modalLogin__checkBox'} onChange={onAgreeRules}/>
                <p className={'modalLogin__conditions'}>
                    Согласен с условиями, <a href={'/'} className={'modalLogin__link'}>правилами возврата</a> и
                    <a href="/" className={'modalLogin__link'}> правилами пользования торговой площадкой</a>.
                </p>
            </div>
        </div>
    );
};

export default InitialModalLogin;