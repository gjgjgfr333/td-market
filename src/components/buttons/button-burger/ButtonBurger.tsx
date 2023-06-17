import React from 'react';
import './button-burger.scss'

interface IButtonBurger {
    isPressed: boolean,
    setIsPressed:  (isPressed: boolean) => void;
    isLittle?: boolean,
}

const ButtonBurger = ({isPressed, setIsPressed, isLittle = false}: IButtonBurger) => {
    return (
        <div className={`hamburger-container ${isLittle && 'little'}`}>
            <div className={`hamburger ${isPressed && 'active'} ${isLittle && 'little'}`} onClick={() => setIsPressed(!isPressed)}>
                <div className={`hamburger__item line-1 ${isPressed && 'active'} ${isLittle && 'little'}`}/>
                <div className={`hamburger__item line-2 ${isLittle && 'little'}`}/>
                <div className={`hamburger__item line-3 ${isLittle && 'little'}`}/>
            </div>
        </div>
    );
};

export default ButtonBurger;