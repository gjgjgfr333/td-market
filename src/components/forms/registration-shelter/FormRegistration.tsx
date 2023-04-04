import React, {ChangeEvent, useState} from 'react';
import InputPassword from "../../inputs/InputPassword";
import './form-registration.scss'
import validator from "validator";

const FormRegistration = () => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')
    const [error, setError] = useState(false)
    const onSetPassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
        setError(false)
    }

    const onSetNumber = (e: ChangeEvent<HTMLInputElement>) => {
        if (/[a-zа-яё]/i.test(e.target.value)) return
        setPhone(e.target.value)
        if (validator.isMobilePhone(e.target.value)) {
            console.log('ok')
        }
    }


    return (
        <form className={'reg'}>
            <h2 className={'reg__title'}>
                Начните продавать на td-market.md
            </h2>
            <div className={'reg-field'}>
                <label htmlFor="Name" className={'label'}>Имя/Наименование</label>
                <input id={'Name'} className={'modalInput modalInput_light'}
                       type="text"
                       placeholder={'Введите Ваше имя или наименование'}
                       value={name}
                       onChange={(e) => setName(e.target.value)} />
            </div>
            <div className={'reg-field'}>
                <label htmlFor="Phone" className={'label'}>Номер телефона</label>
                <input id={'Phone'} className={'modalInput modalInput_light  '}
                       type="tel"
                       placeholder={'+373(__)_-___-__'}
                       value={phone}
                        onChange={onSetNumber}
                />
            </div>
            <div className={'reg-field'}>
                <label htmlFor="Mail" className={'label'}>E-mail</label>
                <input id={'Mail'} className={'modalInput modalInput_light  '}
                       type="text"
                       placeholder={'E-mail'}/>
            </div>
            <InputPassword password={password} onSetPassword={onSetPassword} placeholder={'Придумайте пароль'}/>
            <button className={'button button_dark reg__button'}>ПРОДОЛЖИТЬ</button>
            <p className={'contract'}>
                Нажимая на кнопку “Продолжить”,
                вы соглашаетесь c <a href={'/'} target={'_blank'}>Договором Оферты</a> и <a href={'/'} target={'_blank'}>Политикой Конфиденциальности</a>.
            </p>
        </form>
    );
};

export default FormRegistration;