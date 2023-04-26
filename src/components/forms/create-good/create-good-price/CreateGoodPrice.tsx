import React from 'react';
import './create-good-price.scss'
import {useForm} from "react-hook-form";

const CreateGoodPrice = () => {
    const {register, handleSubmit} = useForm()

    const onSubmit = () => {

    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={'description'}>
            <h3 className={'subtitle'}>
                Цена и наличие товара
            </h3>
            <div className={'good-price'}>
                <div className={'description__block'}>
                    <label className={'label'} htmlFor="price">Цена</label>
                    <input
                        id={'price'}
                        className={'modalInput description__input good-price__input'}
                        {...register('price')}
                    />
                </div>
                <div className={'description__block'}>
                    <label className={'label'} htmlFor="priceDiscount">Цена до скидки</label>
                    <input
                        id={'priceDiscount'}
                        className={'modalInput description__input good-price__input'}
                        {...register('priceDiscount')}
                    />
                </div>
                <div className={'description__block'}>
                    <label className={'label'} htmlFor="quantityInStock">Количество на складе (единиц в наличии)</label>
                    <input
                        id={'quantityInStock'}
                        className={'modalInput description__input good-price__input'}
                        {...register('quantityInStock')}
                    />
                </div>
            </div>
        </form>
    );
};

export default CreateGoodPrice;
