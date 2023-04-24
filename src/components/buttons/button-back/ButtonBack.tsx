import React from 'react';
import '../../../styles/elements/buttons.scss'
import './button-back.scss'
import {useNavigate} from "react-router-dom";

const ButtonBack = () => {

    const navigate = useNavigate()

    const onBack = () => {
        navigate(-1)
    }

    return (
        <button className={'button button_light button-back'} onClick={onBack}>
            <img src="/images/svg/arrow-back.svg" alt="назад"/>
            <span>назад</span>
        </button>
    );
};

export default ButtonBack;