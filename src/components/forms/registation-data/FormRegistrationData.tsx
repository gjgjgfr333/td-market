import React, {useRef, useState} from 'react';
import './forn-registration-data.scss'
import '../../../styles/elements/inputs.scss'

const FormRegistrationData = () => {
    const [isIndividual, setIsIndividual] = useState(false)
    const inputFileRef = useRef<HTMLInputElement>(null)
    const [imageName, setImageName] = useState('')

    const onSubmitFile = () => {
        if (inputFileRef.current?.files) {
            setImageName(inputFileRef.current?.files?.[0].name)
        }
        console.dir(inputFileRef.current?.files)
    }

    const onDeleteFile = () => {
        setImageName('')
    }

    return (
        <div className={'form-data'}>
            <p className={'form-data__description'}>
                Для получения доступа к личному кабинету td-market, заполните, пожалуйста, ваши личные и юридические данные и нажмите кнопку “Сохранить”.
            </p>
            <fieldset>
                <legend className={'legend'}>Личные данные</legend>
                <div className={'form-data__inputs'}>
                    <div className={'reg-field'}>
                        <label htmlFor="Name" className={'label'}>Имя</label>
                        <input id={'Name'} className={`modalInput modalInput_light`}
                               type="text"
                               placeholder={'Введите Ваше имя'}
                        />
                    </div>
                    <div className={'reg-field'}>
                        <label htmlFor="Family" className={'label'}>Фамилия</label>
                        <input id={'Family'} className={`modalInput modalInput_light`}
                               type="text"
                               placeholder={'Введите Вашу фамилию'}
                        />
                    </div>
                    <div className={'reg-field'}>
                        <label htmlFor="Patronymic" className={'label'}>Отчество</label>
                        <input id={'Patronymic'} className={`modalInput modalInput_light`}
                               type="text"
                               placeholder={'Введите Ваше отчество'}
                        />
                    </div>
                    <div className={'reg-field'}>
                        <label htmlFor="Birthday" className={'label'}>Дата рождения</label>
                        <input id={'Birthday'} className={`modalInput modalInput_light`}
                               type="text"
                               placeholder={'ДД/ММ/ГГГГ'}
                        />
                    </div>
                </div>
            </fieldset>
            <fieldset>
                <div className={'form-data__nearly'}>
                    <legend className={'legend'}>Данные близкого человека</legend>
                    <div className={'mark'}>
                        <img src="/images/svg/mark.svg" alt="Пометка"/>
                        <span className={'label'}>
                            Эти данные будут необходимы, если мы в течение долгого времени не сможем связаться с Вами
                        </span>
                    </div>
                </div>
                <div className={'form-data__inputs'}>
                    <div className={'reg-field'}>
                        <label htmlFor="Name-man" className={'label'}>Имя</label>
                        <input id={'Name-man'} className={`modalInput modalInput_light`}
                               type="text"
                               placeholder={'Введите имя'}
                        />
                    </div>
                    <div className={'reg-field'}>
                        <label htmlFor="Family-man" className={'label'}>Фамилия</label>
                        <input id={'Family-man'} className={`modalInput modalInput_light`}
                               type="text"
                               placeholder={'Введите фамилию'}
                        />
                    </div>
                    <div className={'reg-field'}>
                        <label htmlFor="Patronymic-man" className={'label'}>Отчество</label>
                        <input id={'Patronymic-man'} className={`modalInput modalInput_light`}
                               type="text"
                               placeholder={'Введите отчество'}
                        />
                    </div>
                    <div className={'reg-field'}>
                        <label htmlFor="Phone" className={'label'}>Номер телефона</label>
                        <input id={'Phone'} className={`modalInput modalInput_light`}
                               type="tel"
                               placeholder={'+373'}
                        />
                    </div>
                </div>
            </fieldset>
            <fieldset>
                <div className={'form-data__nearly'}>
                    <legend className={'legend'}>Данные юридического лица</legend>
                    <div className={'mark'}>
                        <input
                            className={'checkbox'}
                            id={'checkbox'}
                            type="checkbox"
                            onChange={() => setIsIndividual(!isIndividual)}
                        />
                        <label className={'label'} htmlFor="checkbox">Я - самозанятый (физ.лицо, ИП)</label>
                    </div>
                </div>

                <div className={'form-data__inputs'}>
                    <div className={'reg-field'}>
                        <label htmlFor="Naming" className={'label'}>
                            {isIndividual ? 'Регистрационный номер' : 'Фискальный код'}
                        </label>
                        <input id={'Naming'} className={`modalInput modalInput_light`}
                               type="text"
                               placeholder={`Введите ${isIndividual ? 'регистрационный номер' : 'фискальный код'}`}
                        />
                        <div className={'mark mark_absolute'}>
                            <img src="/images/svg/mark.svg" alt="Пометка"/>
                            <span className={'label'}>
                                Для проверки необходимо прикрепить скан (фото) ИНН
                            </span>
                        </div>
                    </div>
                    <div className={'input-file'}>
                        <label htmlFor="Scan" className={imageName ? 'current' : ''}>
                            <img
                                src={imageName ? '/images/svg/input-file-success.svg' : "/images/svg/input-file.svg"}
                                alt="Прикрепите скан"
                            />
                            <span>{imageName     ? 'Прикреплено' : 'Прикрепить'}</span>
                        </label>
                        <input
                               type="file"
                               id={'Scan'}
                               onChange={onSubmitFile}
                               ref={inputFileRef}
                        />
                        {
                            imageName &&
                            <div className={'name-image'}>
                                <span>
                                    {imageName}
                                </span>
                                <img src="/images/svg/close.svg" alt="Убрать фото" onClick={onDeleteFile}/>
                            </div>
                        }
                    </div>
                    <div className={'reg-field'}>
                        <label htmlFor="Bank" className={'label'}>БИК банка</label>
                        <input id={'Bank'} className={`modalInput modalInput_light`}
                               type="text"
                               placeholder={'Введите БИК банка'}
                        />
                        <div className={'mark mark_absolute'}>
                            <img src="/images/svg/mark.svg" alt="Пометка"/>
                            <span className={'label'}>
                                БИК – уникальный номер, который выступает в роли идентификационного кода банковского учреждения
                            </span>
                        </div>
                    </div>
                    <div className={'reg-field'}>
                        <label htmlFor="Check" className={'label'}>Номер расчётного счёта</label>
                        <input id={'Check'} className={`modalInput modalInput_light reg-field__check`}
                               type="text"
                               placeholder={'Введите номер вашего расчетного счета'}
                        />
                    </div>
                </div>
            </fieldset>
        </div>
    );
};

export default FormRegistrationData;