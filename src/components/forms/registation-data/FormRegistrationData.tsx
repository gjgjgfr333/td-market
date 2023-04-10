import React, {ChangeEvent, useEffect, useRef, useState} from 'react';
import './forn-registration-data.scss'
import '../../../styles/elements/inputs.scss'
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {IPersonalData} from "../../../models/response/IShelter";
import {shelterSlice} from "../../../store/reducers/shelter/ShelterSlice";
import {registrationShelter} from "../../../store/reducers/shelter/ShelterCreator";
import {useNavigate} from "react-router-dom";

const FormRegistrationData = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch()
    const {isRegistry, isAuth} = useAppSelector(state => state.shelterReducer)
    const {shelter} = useAppSelector(state => state.shelterReducer)
    const {setIsRegistry} = shelterSlice.actions
    const inputFileRef = useRef<HTMLInputElement>(null)
    const [image, setImage] = useState<File | null>()
    const [isCompletedInputs, setIsCompletedInputs] = useState(false)
    const [closePerson, setClosePerson] = useState({
        name: '',
        family: '',
        patronymic: '',
        phone: '',
    })
    const [personalData, setPersonalData] = useState<IPersonalData>({
        name: '',
        family: '',
        patronymic: '',
        birthday: '',
    })
    const [entityData, setEntityData] = useState({
        isIndividual: false,
        code: '',
        // photo: null,
        bic: '',
        check: ''
    })

    useEffect(() => {
        isAuth && navigate('/shelter')
    }, [isAuth, navigate])

    useEffect(() => {
        if (isRegistry) {
            let isCompletedFields = true

            for (let field of Object.values(closePerson)) {
                if (!field) {
                    console.log('hey 48')
                    isCompletedFields = false
                }
            }

            for (let field of Object.values(personalData)) {
                if (!field) {
                    console.log('hey 55', !field)
                    isCompletedFields = false
                }
            }

            for (let field of Object.values(entityData)) {
                if (!(typeof field === 'boolean') && !field) {
                    console.log('hey 62', field)
                    isCompletedFields = false
                }
            }

            if (!image) {
                isCompletedFields = false
            }

            if (!isCompletedFields || !image) {
                console.log('bro')
                setIsRegistry()
                setIsCompletedInputs(true)
                return
            }
            const localShelter = localStorage.getItem('shelter')
            // @ts-ignore
            const shelterData = (localShelter !== '{}') || (localShelter !== null) ? JSON.parse(localShelter) : shelter
            dispatch(registrationShelter({
                ...shelterData,
                closePerson,
                personalData,
                entity: entityData
            }, image))
        }
    }, [isRegistry, isCompletedInputs, image, shelter, dispatch, closePerson, personalData, entityData, setIsRegistry])

    const onSetName = (e: ChangeEvent<HTMLInputElement>) => {
        setPersonalData({...personalData, name: e.target.value})
    }

    const onSetFamily = (e: ChangeEvent<HTMLInputElement>) => {
        setPersonalData({...personalData, family: e.target.value})
    }

    const onSetPatronymic = (e: ChangeEvent<HTMLInputElement>) => {
        setPersonalData({...personalData, patronymic: e.target.value})
    }

    const onSetBirthDay = (e: ChangeEvent<HTMLInputElement>) => {
        if (/[a-zа-яё!?&^%$#@*()'"]/i.test(e.target.value)) return
        if (e.target.value.length > 10) return
        setPersonalData({...personalData, birthday: e.target.value})
    }

    const onSetNamePerson = (e: ChangeEvent<HTMLInputElement>) => {
        setClosePerson({...closePerson, name: e.target.value})
    }

    const onSetFamilyPerson = (e: ChangeEvent<HTMLInputElement>) => {
        setClosePerson({...closePerson, family: e.target.value})
    }

    const onSetPatronymicPerson = (e: ChangeEvent<HTMLInputElement>) => {
        setClosePerson({...closePerson, patronymic: e.target.value})
    }

    const onSetPhone = (e: ChangeEvent<HTMLInputElement>) => {
        setClosePerson({...closePerson, phone: e.target.value})
    }

    const onSetCode = (e: ChangeEvent<HTMLInputElement>) => {
        setEntityData({...entityData, code: e.target.value})
    }

    const onSetBic = (e: ChangeEvent<HTMLInputElement>) => {
        setEntityData({...entityData, bic: e.target.value})
    }

    const onSetCheck = (e: ChangeEvent<HTMLInputElement>) => {
        setEntityData({...entityData, check: e.target.value})
    }

    const onSubmitFile = (e: ChangeEvent<HTMLInputElement>) => {
        console.log('e', e.target.files)
        const { files } = e.target;
        const selectedFiles = files as FileList;
        setImage(selectedFiles?.[0])
        // if (e.target.files) {
        //     setImage(e.target.files[0])
        // }
        if (inputFileRef.current?.files) {
            // setImage(inputFileRef.current?.files?.[0].name)
        }
        console.dir(inputFileRef.current?.files)
        // try {
        //     const formData = new FormData()
        //     if (e.target.files?.[0]) {
        //         const file = e.target.files[0]
        //         formData.append('image', file)
        //     }
        // } catch (e) {
        //
        // }
    }

    const onDeleteFile = () => {
        setImage(null)
    }

    return (
        <div className={'form-data'}>
            {!isCompletedInputs ?
                <p className={'form-data__description'}>
                    Для получения доступа к личному кабинету td-market, заполните, пожалуйста, ваши личные и юридические
                    данные и нажмите кнопку “Сохранить”.
                </p> :
                <div className={'mark error'}>
                    <img src="/images/svg/mark-error.svg" alt="Пометка"/>
                    <span className={'label'}>
                            Обратите внимание, что все поля обязательны для заполнения.
                        </span>
                </div>
            }
            <fieldset>
                <legend className={'legend'}>Личные данные</legend>
                <div className={'form-data__inputs'}>
                    <div className={'reg-field'}>
                        <label htmlFor="Name" className={'label'}>Имя</label>
                        <input id={'Name'} className={`modalInput modalInput_light`}
                               type="text"
                               placeholder={'Введите Ваше имя'}
                               value={personalData.name}
                               onChange={onSetName}
                        />
                    </div>
                    <div className={'reg-field'}>
                        <label htmlFor="Family" className={'label'}>Фамилия</label>
                        <input id={'Family'} className={`modalInput modalInput_light`}
                               type="text"
                               placeholder={'Введите Вашу фамилию'}
                               value={personalData.family}
                               onChange={onSetFamily}
                        />
                    </div>
                    <div className={'reg-field'}>
                        <label htmlFor="Patronymic" className={'label'}>Отчество</label>
                        <input id={'Patronymic'} className={`modalInput modalInput_light`}
                               type="text"
                               placeholder={'Введите Ваше отчество'}
                               value={personalData.patronymic}
                               onChange={onSetPatronymic}
                        />
                    </div>
                    <div className={'reg-field'}>
                        <label htmlFor="Birthday" className={'label'}>Дата рождения</label>
                        <input id={'Birthday'} className={`modalInput modalInput_light`}
                               type="text"
                               placeholder={'ДД/ММ/ГГГГ'}
                               value={personalData.birthday}
                               onChange={onSetBirthDay}
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
                               value={closePerson.name}
                               onChange={onSetNamePerson}
                        />
                    </div>
                    <div className={'reg-field'}>
                        <label htmlFor="Family-man" className={'label'}>Фамилия</label>
                        <input id={'Family-man'} className={`modalInput modalInput_light`}
                               type="text"
                               placeholder={'Введите фамилию'}
                               value={closePerson.family}
                               onChange={onSetFamilyPerson}
                        />
                    </div>
                    <div className={'reg-field'}>
                        <label htmlFor="Patronymic-man" className={'label'}>Отчество</label>
                        <input id={'Patronymic-man'} className={`modalInput modalInput_light`}
                               type="text"
                               placeholder={'Введите отчество'}
                               value={closePerson.patronymic}
                               onChange={onSetPatronymicPerson}
                        />
                    </div>
                    <div className={'reg-field'}>
                        <label htmlFor="Phone" className={'label'}>Номер телефона</label>
                        <input id={'Phone'} className={`modalInput modalInput_light`}
                               type="tel"
                               placeholder={'+373'}
                               value={closePerson.phone}
                               onChange={onSetPhone}
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
                            onChange={() => setEntityData({...entityData, isIndividual: !entityData.isIndividual})}
                        />
                        <label className={'label'} htmlFor="checkbox">Я - самозанятый (физ.лицо, ИП)</label>
                    </div>
                </div>

                <div className={'form-data__inputs'}>
                    <div className={'reg-field'}>
                        <label htmlFor="Naming" className={'label'}>
                            {entityData.isIndividual ? 'Регистрационный номер' : 'Фискальный код'}
                        </label>
                        <input id={'Naming'} className={`modalInput modalInput_light`}
                               type="text"
                               placeholder={`Введите ${entityData.isIndividual ? 'регистрационный номер' : 'фискальный код'}`}
                               value={entityData.code}
                               onChange={onSetCode}
                        />
                        <div className={'mark mark_absolute'}>
                            <img src="/images/svg/mark.svg" alt="Пометка"/>
                            <span className={'label'}>
                                Для проверки необходимо прикрепить скан (фото) ИНН
                            </span>
                        </div>
                    </div>
                    <div className={'input-file'}>
                        <label className={image ? 'current' : ''} onClick={() => {
                            if (inputFileRef.current) inputFileRef.current.click()
                        }}>
                            <img
                                src={image ? '/images/svg/input-file-success.svg' : "/images/svg/input-file.svg"}
                                alt="Прикрепите скан"
                            />
                            <span>{image ? 'Прикреплено' : 'Прикрепить'}</span>
                        </label>
                        <input
                               type="file"
                               id={'Scan'}
                               onChange={onSubmitFile}
                               ref={inputFileRef}
                        />
                        {
                            image &&
                            <div className={'name-image'}>
                                <span>
                                    {image.name}
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
                               value={entityData.bic}
                               onChange={onSetBic}
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
                               value={entityData.check}
                               onChange={onSetCheck}
                        />
                    </div>
                </div>
            </fieldset>
        </div>
    );
};

export default FormRegistrationData;