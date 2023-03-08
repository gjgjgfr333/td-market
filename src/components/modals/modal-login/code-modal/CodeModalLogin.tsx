import React, {ChangeEvent, useState} from 'react';
import './code-modal-login.scss'
import {useAppSelector} from "../../../../hooks/redux";

const CodeModalLogin = () => {
    const {email} = useAppSelector(state => state.userReducer.user)
    const {activationCode} = useAppSelector(state => state.userReducer)
    const [code, setCode] = useState('')

    const onChangeCode = (e: ChangeEvent<HTMLInputElement>) => {
        // пустая строка или только цифры
        if (e.target.value === '' || /^\d+$/i.test(e.target.value)) setCode(e.target.value)
    }

    const onCompareCode = () => {
        console.log('activationCode', activationCode, typeof activationCode)
        console.log('code', code, typeof code)
        const stringCode = activationCode.toString()
        if (stringCode === code) console.log('YEAH UUUUUU')
    }

    return (
        <div className={'modalCode'}>
            <p className={'modalCode__text'}>
                Мы отправили письмо с кодом на почту <strong>{email}</strong>. Введите код для завершения регистрации.
            </p>
            <input
                type="text"
                className={'modalInput'}
                placeholder={'Ввести полученный код'}
                value={code}
                onChange={onChangeCode}
            />
            <button className={'button button_dark'} onClick={onCompareCode}>ПРОДОЛЖИТЬ</button>
            <button className={'button button_light'}>ВЫСЛАТЬ КОД ЕЩЁ РАЗ-</button>
        </div>
    );
};

export default CodeModalLogin;