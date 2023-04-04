import React, {ChangeEvent, useState} from 'react';
import InputPassword from "../../inputs/InputPassword";
// import './form-registration.scss'

const FormLogin = () => {
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)
    const onSetPassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
        setError(false)
    }


    return (
        <form className={'log'}>
            <h2 className={'log__title'}>
                Добро пожаловать на td-market.md
            </h2>
            <div className={'reg-field'}>
                <label htmlFor="Mail" className={'label'}>E-mail</label>
                <input id={'Mail'} className={'modalInput modalInput_light  '}
                       type="text"
                       placeholder={'E-mail'}/>
            </div>
            <InputPassword password={password} onSetPassword={onSetPassword} placeholder={'Введите пароль'}/>
            <button className={'button button_dark reg__button'}>ВОЙТИ</button>
        </form>
    );
};

export default FormLogin;