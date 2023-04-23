import React, {ChangeEvent, useState} from 'react';
import InputPassword from "../../inputs/input-password/InputPassword";
import './form-registration.scss'
import validator from "validator";
import {useAppDispatch} from "../../../hooks/redux";
import ModalLogin from "../../modals/modal-login/ModalLogin";
import {sendCodeShelter} from "../../../store/reducers/shelter/ShelterCreator";
import {shelterSlice} from "../../../store/reducers/shelter/ShelterSlice";

const FormRegistration = () => {
    const dispatch = useAppDispatch()
    const {setFirstData} = shelterSlice.actions
    const [name, setName] = useState('')
    const [isErrorName, setIsErrorName] = useState(false)
    const [password, setPassword] = useState('')
    const [isErrorPassword, setIsErrorPassword] = useState(false)
    const [phone, setPhone] = useState('')
    const [isErrorPhone, setIsErrorPhone] = useState(false)
    const [mail, setMail] = useState('')
    const [isErrorMail, setIsErrorMail] = useState(false)
    const [isCover, setIsCover] = useState(false)

    const onSetPassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    const onSetNumber = (e: ChangeEvent<HTMLInputElement>) => {
        if (/[a-zа-яё]/i.test(e.target.value)) return
        setPhone(e.target.value)
        setIsErrorPhone(false)
    }

    const onSetMail = (e: ChangeEvent<HTMLInputElement>) => {
        setMail(e.target.value)
        setIsErrorMail(false)
    }

    const onContinueRegistry = (e: any) => {
        e.preventDefault()
        const errorPhone = !validator.isMobilePhone(phone)
        const errorMail = !validator.isEmail(mail)
        if (errorPhone) {
         setIsErrorPhone(true)
        }
        if (errorMail) {
            setIsErrorMail(true)
        }
        if (!name) {
            setIsErrorName(true)
        }
        if (!password) {
            setIsErrorPassword(true)
        }
        if (errorPhone || errorMail || !name || !password) return
        setIsCover(true)
        dispatch(setFirstData({
            password,
            email: mail,
            name,
            phone
        }))
        localStorage.setItem('shelter', JSON.stringify({
            password,
            email: mail,
            name,
            phone
        }))
        dispatch(sendCodeShelter(mail))
    }


    return (
        <>
            <form className={'reg'}>
                <h2 className={'reg__title'}>
                    Начните продавать на td-market.md
                </h2>
                <div className={'reg-field'}>
                    <label htmlFor="Name" className={'label'}>Имя/Наименование</label>
                    <input id={'Name'} className={`modalInput modalInput_light ${isErrorName && 'error'}`}
                           type="text"
                           placeholder={'Введите Ваше имя или наименование'}
                           value={name}
                           onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className={'reg-field'}>
                    <label htmlFor="Phone" className={'label'}>Номер телефона</label>
                    <input id={'Phone'} className={`modalInput modalInput_light ${isErrorPhone && 'error'}`}
                           type="tel"
                           placeholder={'+373(__)_-___-__'}
                           value={phone}
                           onChange={onSetNumber}
                    />
                </div>
                <div className={'reg-field'}>
                    <label htmlFor="Mail" className={'label'}>E-mail</label>
                    <input id={'Mail'} className={`modalInput modalInput_light ${isErrorMail && 'error'}`}
                           type="email"
                           placeholder={'E-mail'}
                           value={mail}
                           onChange={onSetMail}
                    />
                </div>
                <InputPassword password={password} onSetPassword={onSetPassword} placeholder={'Придумайте пароль'} error={isErrorPassword}/>
                <button onClick={onContinueRegistry} className={'button button_dark reg__button'}>ПРОДОЛЖИТЬ</button>
                <p className={'contract'}>
                    Нажимая на кнопку “Продолжить”,
                    вы соглашаетесь c <a href={'/'} target={'_blank'}>Договором Оферты</a> и <a href={'/'} target={'_blank'}>Политикой Конфиденциальности</a>.
                </p>
            </form>
            {isCover && <ModalLogin observableModal={1} isShelter={true}/>}
        </>

    );
};

export default FormRegistration;