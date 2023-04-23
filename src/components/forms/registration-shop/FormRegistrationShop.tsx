import React, {useState} from 'react';
import './form-registration-shop.scss'
import '../../../styles/elements/titles.scss'
import '../../../styles/elements/buttons.scss'
import {useForm} from "react-hook-form";
import InputFile from "../../inputs/input-file/InputFile";
import DeliveryPointsForm from "./DeliveryPointsForm";

const FormRegistrationShop = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [image, setImage] = useState<File | null>(null)

    const onSubmit = () => {
        console.log('hey')
    }

    return (
        <form className={'form-shop'} onSubmit={handleSubmit(onSubmit)}>
            <p className={'form-shop__inf'}>
                Для успешной работы на td-market заполните, пожалуйста, данные вашего магазина и нажмите кнопку “Сохранить”.
                Вы сможете сделать это позже в Личном кабинете, однако мы не рекомендуем пропускать этот шаг.
            </p>
            <fieldset className={'form-shop__block'}>
                <legend className={'legend'}>Основные данные</legend>
                <div className={'input-box'}>
                    <label className={'label required'} htmlFor="name-shop">Название</label>
                    <input
                        type="text"
                        id={'name-shop'}
                        placeholder={'Введите название магазина'}
                        className={'modalInput form-shop__short'}
                        {...register('name', {required: true})}
                    />
                </div>
                <div className={'input-box'}>
                    <label className={'label'} htmlFor="name-placeholder">Описание</label>
                    <textarea
                        id={'name-placeholder'}
                        placeholder={'Добавьте описание магазина'}
                        className={'modalInput textarea'}
                        {...register('description')}
                    />
                </div>
            </fieldset>
            <fieldset className={'form-shop__block'}>
                <legend className={'legend required'}>Добавление фото</legend>
                <p className={'form-shop__p'}>Загрузите фото, которое будет отображаться на странице вашего магазина.</p>
                <InputFile image={image} setImage={setImage} position={'bottom'}/>
            </fieldset>
            <DeliveryPointsForm/>
            <button className={'button button_dark form-shop__save'} type={'submit'}>Сохранить и приступить к работе</button>
        </form>
    );
};

export default FormRegistrationShop;
