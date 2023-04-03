import React, {ChangeEvent, useState} from 'react';
import './input-password.scss'
import {TVisibility} from "../../models/types";

interface IInputPassword {
    password: string,
    onSetPassword: (e: ChangeEvent<HTMLInputElement>) => void,
    label?: string,
    className?: string,
    placeholder?: string,
}

const InputPassword = ({password,
                           onSetPassword,
                           label = 'Пароль',
                           className = 'modalInput_light',
                           placeholder = ''}: IInputPassword) => {
    const [visibilityPassword, setVisibilityPassword] = useState<TVisibility>('password')

    const onSwitchVisibility = () => {
        setVisibilityPassword(visibilityPassword === 'password' ? 'text' : 'password')
    }

    return (
        <div className={'input-password'}>
            <label className={'label'} htmlFor={'passwordInput'}>{label}</label>
            <input
                value={password}
                onChange={onSetPassword}
                id={'passwordInput'}
                type={visibilityPassword}
                className={`modalInput ${className}`}
                placeholder={placeholder}
            />
            <img
                src={'/images/svg/open-eye.svg'}
                className={'img'}
                alt={''}
                onClick={onSwitchVisibility}/>
        </div>
    );
};

export default InputPassword;