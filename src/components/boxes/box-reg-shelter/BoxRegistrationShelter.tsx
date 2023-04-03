import React, {ChangeEvent, useState} from 'react';
import './box-registration-shelter.scss'
import '../../../styles/elements/inputs.scss'
import Container from "../../container/Container";
import InputPassword from "../../inputs/InputPassword";

const BoxRegistrationShelter = () => {
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)
    const onSetPassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
        setError(false)
    }

    return (
        <main className={'reg-main'}>
            <Container>
                <div className={'reg-main__container'}>
                    <img className={'reg-main__img'} src={'/images/registration-shelter.png'} alt={'Регистрируйтесь и продавайте'}/>
                    <form>
                        <h2 className={'reg-main__title'}>
                            Начните продавать на td-market.md
                        </h2>
                        <div className={'reg-field'}>
                            <label htmlFor="Name" className={'label'}>Имя</label>
                            <input id={'Name'} className={'modalInput modalInput_light'}
                                   type="text"
                                   placeholder={'Введите Ваше имя'}/>
                        </div>
                        <div className={'reg-field'}>
                            <label htmlFor="Family" className={'label'}>Фамилия</label>
                            <input id={'Family'} className={'modalInput modalInput_light  '}
                                   type="text"
                                   placeholder={'Введите Вашу фамилию'}/>
                        </div>
                        <div className={'reg-field'}>
                            <label htmlFor="Phone" className={'label'}>Номер телефона</label>
                            <input id={'Phone'} className={'modalInput modalInput_light  '}
                                   type="text"
                                   placeholder={'+373(__)_-___-__'}/>
                        </div>
                        <div className={'reg-field'}>
                            <label htmlFor="Mail" className={'label'}>E-mail</label>
                            <input id={'Mail'} className={'modalInput modalInput_light  '}
                                   type="text"
                                   placeholder={'E-mail'}/>
                        </div>
                        <InputPassword password={password} onSetPassword={onSetPassword} placeholder={'Придумайте пароль'}/>
                        <button className={'button button_dark reg-main__button'}>ПРОДОЛЖИТЬ</button>
                        <p className={'contract'}>
                            Нажимая на кнопку “Продолжить”,
                            вы соглашаетесь c <a href={'/'} target={'_blank'}>Договором Оферты</a> и <a href={'/'} target={'_blank'}>Политикой Конфиденциальности</a>.
                        </p>
                    </form>
                </div>
            </Container>
        </main>
    );
};

export default BoxRegistrationShelter;