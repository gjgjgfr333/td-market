import React, {ChangeEvent, Dispatch, SetStateAction, useState} from 'react';
import './code-modal-login.scss'
import {useAppDispatch, useAppSelector} from "../../../../hooks/redux";
import {sendCode} from "../../../../store/reducers/user/UserCreators";
import {sendCodeShelter} from "../../../../store/reducers/shelter/ShelterCreator";
import {useNavigate} from "react-router-dom";
import {shelterSlice} from "../../../../store/reducers/shelter/ShelterSlice";

interface ICodeModalLogin {
    setCurrentModal: Dispatch<SetStateAction<number>>,
    isShelter?: boolean,
}

const CodeModalLogin = ({setCurrentModal, isShelter}: ICodeModalLogin) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch()
    const {email} = useAppSelector(state => state.userReducer.user)
    const emailShelter = useAppSelector(state => state.shelterReducer.shelter.email)
    const {activationCode} = useAppSelector(state => state.userReducer)
    const activationCodeShelter = useAppSelector(state => state.shelterReducer.activationCode)
    const {setIsRegistered} = shelterSlice.actions
    const [code, setCode] = useState('')
    const [isError, setIsError] = useState(false)

    const onChangeCode = (e: ChangeEvent<HTMLInputElement>) => {
        // пустая строка или только цифры
        if (e.target.value === '' || /^\d+$/i.test(e.target.value)) {
            setCode(e.target.value)
            setIsError(false)
        }
    }

    const onCompareCode = () => {
        if (!isShelter) {
            const stringCode = activationCode.toString()
            if (stringCode === code) {
                setCurrentModal(2)
            } else setIsError(true)
        } else  {
            const stringCode = activationCodeShelter.toString()
            if (stringCode === code) {
                navigate('/registration-next')
                setIsRegistered(true)

            } else setIsError(true)
        }
    }

    const onRepeatCode = () => {
        !isShelter ? dispatch(sendCode(email)) : dispatch(sendCodeShelter(emailShelter))
    }

    return (
        <div className={'modalCode'}>
            <p className={'modalCode__text'}>
                Мы отправили письмо с кодом на почту <strong>{emailShelter}</strong>. Введите код для завершения регистрации.
            </p>
            <div className={'inputCode'}>
                <input
                    type="text"
                    className={`modalInput ${isError && 'error'}`}
                    placeholder={'Ввести полученный код'}
                    value={code}
                    onChange={onChangeCode}
                />
                {isError && <p className={'warningLogin'}>
                    Вы ввели неверный код авторизации. Попробуйте ввести полученный код еще раз.
                </p>}
            </div>
            <button className={'button button_dark'} onClick={onCompareCode}>ПРОДОЛЖИТЬ</button>
            <button className={'button button_light'} onClick={onRepeatCode}>ВЫСЛАТЬ КОД ЕЩЁ РАЗ-</button>
        </div>
    );
};

export default CodeModalLogin;