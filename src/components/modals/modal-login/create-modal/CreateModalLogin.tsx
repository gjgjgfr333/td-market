import React from 'react';
import './create-modal-login.scss'

const CreateModalLogin = () => {
    return (
        <div className={'creatModal'}>
            <h3 className={'userAuthModal__title creatModal__title'}>Придумайте надёжный пароль</h3>
            <div>
                <label className={'creatModal__label'} htmlFor={'passwordInput'}>Введите пароль</label>
                <input
                    id={'passwordInput'}
                    type="password"
                    className={`modalInput creatModal__password`}
                />
                <img src={'/public/images/svg/open-eye.svg'}/>
            </div>
            <div>
                <label className={'creatModal__label'} htmlFor={'repeatPasswordInput'}>Введите пароль еще раз</label>
                <input
                    id={'repeatPasswordInput'}
                    type="password"
                    className={`modalInput modalInput creatModal__repeat-password`}
                />
            </div>
            <button className={'button button_dark'}>ЗАВЕРШИТЬ РЕГИСТРАЦИЮ</button>
        </div>
    );
};

export default CreateModalLogin;