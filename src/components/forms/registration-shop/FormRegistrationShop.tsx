import React, {useState} from 'react';
import './form-registration-shop.scss'
import '../../../styles/elements/titles.scss'
import '../../../styles/elements/buttons.scss'
import {SubmitHandler, useForm} from "react-hook-form";
import InputFile from "../../inputs/input-file/InputFile";
import DeliveryPointsForm from "./DeliveryPointsForm";
import {IDeliveryPoint} from "../../../models/IDeliveryPoint";
import {useAppDispatch} from "../../../hooks/redux";
import {registrationShelter} from "../../../store/reducers/shelter/ShelterCreator";
import {IShelterShop} from "../../../models/response/IShelter";

const FormRegistrationShop = () => {
    const dispatch = useAppDispatch()
    const { register, handleSubmit, watch, formState: { errors } } = useForm<IShelterShop>();
    const [imageShop, setImage] = useState<File | null>(null)
    const [deliveryPoints, setDeliveryPoints] = useState<IDeliveryPoint[]>([
        {
            city: '',
            address: '',
            shopName: '',
            notes: ''
        }
    ]);

    const onSubmit: SubmitHandler<IShelterShop> = (data) => {
        const shelter = localStorage.getItem('shelter');

        const shelterData = localStorage.getItem('shelter-data');
        const shelterDataImage = localStorage.getItem('image-shelter-data');
        const imgScan = new Image();
        if (shelterDataImage) {
            imgScan.src = shelterDataImage;
        }
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (ctx) {
            canvas.width = imgScan.width;
            canvas.height = imgScan.height;
            ctx.drawImage(imgScan, 0, 0);
            canvas.toBlob((blob) => {
                if (blob) {
                    const fileScan = new File([blob], 'filename.png', { type: 'image/png' });
                    if (shelter && shelterData && imageShop) {
                        dispatch(registrationShelter({
                            ...JSON.parse(shelter),
                            shelterData: JSON.parse(shelterData),
                            shop: data
                        }, fileScan, imageShop));
                    }
                }
            }, 'image/png');
        }
    }

    return (
        <div className={'form-shop'}>
            <p className={'form-shop__inf'}>
                Для успешной работы на td-market заполните, пожалуйста, данные вашего магазина и нажмите кнопку “Сохранить”.
                Вы сможете сделать это позже в Личном кабинете, однако мы не рекомендуем пропускать этот шаг.
            </p>
            <form className={'form-shop__block'} onSubmit={handleSubmit(onSubmit)}>
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
            </form>
            <fieldset className={'form-shop__block'}>
                <legend className={'legend required'}>Добавление фото</legend>
                <p className={'form-shop__p'}>Загрузите фото, которое будет отображаться на странице вашего магазина.</p>
                <InputFile image={imageShop} setImage={setImage} position={'bottom'}/>
            </fieldset>
            <DeliveryPointsForm deliveryPoints={deliveryPoints} setDeliveryPoints={setDeliveryPoints}/>
            <button className={'button button_dark form-shop__save'} type={'submit'} onClick={handleSubmit(onSubmit)}>
                Сохранить и приступить к работе
            </button>
        </div>
    );
};

export default FormRegistrationShop;
