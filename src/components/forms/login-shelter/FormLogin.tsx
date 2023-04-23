import React, {ChangeEvent, useEffect, useState} from 'react';
import InputPassword from "../../inputs/input-password/InputPassword";
import validator from "validator";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {loginShelter} from "../../../store/reducers/shelter/ShelterCreator";
import {useNavigate} from "react-router-dom";

const FormLogin = () => {
    const navigation = useNavigate()
    const dispatch = useAppDispatch()
    const {isAuth} = useAppSelector(state => state.shelterReducer)
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [errorEmail, setErrorEmail] = useState(false)

    useEffect(() => {
        isAuth && navigation('/shelter')
    }, [isAuth, navigation])

    const onSetPassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    const onEnterShelter = (e: any) => {
        e.preventDefault()
        if (!validator.isEmail(email)) {
            setErrorEmail(true)
            return
        }
        dispatch(loginShelter(email, password))
    }

    return (
        <form className={'log'}>
            <h2 className={'log__title'}>
                Добро пожаловать на td-market.md
            </h2>
            <div className={'reg-field'}>
                <label htmlFor="Mail" className={'label'}>E-mail</label>
                <input id={'Mail'} className={`modalInput modalInput_light ${errorEmail && 'error'}`}
                       type="text"
                       placeholder={'E-mail'}
                       value={email}
                       onChange={(e) => {
                           setEmail(e.target.value)
                       }}
                />
            </div>
            <InputPassword password={password} onSetPassword={onSetPassword} placeholder={'Введите пароль'}/>
            <button className={'button button_dark reg__button'} onClick={onEnterShelter}>ВОЙТИ</button>
        </form>
    );
};

export default FormLogin;