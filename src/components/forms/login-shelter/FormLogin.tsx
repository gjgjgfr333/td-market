import React, {ChangeEvent, useEffect, useState} from 'react';
import './form-login.scss'
import InputPassword from "../../inputs/input-password/InputPassword";
import validator from "validator";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {loginShelter, sendCodeShelter} from "../../../store/reducers/shelter/ShelterCreator";
import {useNavigate} from "react-router-dom";
import ModalLogin from "../../modals/modal-login/ModalLogin";
import {userSlice} from "../../../store/reducers/user/UserSlice";

const FormLogin = () => {
    const navigation = useNavigate()
    const dispatch = useAppDispatch()
    const {isAuth} = useAppSelector(state => state.shelterReducer)
    const {isUserModal} = useAppSelector(state => state.userReducer)
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [isErrorMail, setIsErrorMail] = useState(false)
    const [errorEmail, setErrorEmail] = useState(false)
    const [isCover, setIsCover] = useState(false)
    const {changeIsUserModal} = userSlice.actions

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

    const createNewPassword = () => {
        const errorMail = !validator.isEmail(email)
        if (errorMail) {
            setIsErrorMail(true)
            return
        }
        dispatch(changeIsUserModal(true))
        dispatch(sendCodeShelter(email))
    }

    return (
        <form className={'log'}>
            <h2 className={'log__title'}>
                Добро пожаловать на td-market.md
            </h2>
            <div className={'reg-field log__field'}>
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
            <div>
                <InputPassword password={password} onSetPassword={onSetPassword} placeholder={'Введите пароль'}/>
                <p className={'label label-pas'} onClick={createNewPassword}>Забыли пароль?</p>
            </div>
            <button className={'button button_dark reg__button'} onClick={onEnterShelter}>ВОЙТИ</button>
            {isUserModal && <ModalLogin observableModal={1} isShelter={true}/>}
        </form>
    );
};

export default FormLogin;