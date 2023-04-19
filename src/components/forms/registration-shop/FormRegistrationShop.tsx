import React from 'react';
import {useForm} from "react-hook-form";

const FormRegistrationShop = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = () => {

    }

    return (
        <div>
            <p>
                Для успешной работы на td-market заполните, пожалуйста, данные вашего магазина и нажмите кнопку “Сохранить”.
                Вы сможете сделать это позже в Личном кабинете, однако мы не рекомендуем пропускать этот шаг.
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3>Основнеые данные</h3>
                <div>
                    <label htmlFor="">Название</label>
                    <input type="text" placeholder={'Введите название магазина'}/>
                </div>
                <div>
                    <label htmlFor="">Описание</label>
                    <textarea placeholder={'Добавьте описание магазина'}/>
                </div>
            </form>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3>Добвление фото</h3>
                <p>Загрузите фото, которое будет отображаться на странице вашего магазина.</p>
            </form>
        </div>
    );
};

export default FormRegistrationShop;