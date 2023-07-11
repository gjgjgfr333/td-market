import React from 'react';
import './create-good-dimensions.scss'
import { useFormContext } from 'react-hook-form';
import {IProductCard} from "../../../../models/IProductCard";

const CreateGoodDimensions = ({card} : {card: IProductCard | null}) => {
    const { register } = useFormContext();

    return (
        <div className={'dimensions'}>
            <h3 className="subtitle subtitle_add">Габариты (информация для доставки)</h3>
            <p className="add-description dimensions__add">Укажите размеры товара в упаковке</p>
            <div className="good-dimensions">
                <div className="description__block">
                    <label className="label" htmlFor="length">
                        Длина, см
                    </label>
                    <input
                        id="length"
                        className="modalInput description__input good-dimensions__input"
                        defaultValue={card ? card.dimensions.length : ''}
                        {...register('length')}
                    />
                </div>
                <div className="description__block">
                    <label className="label" htmlFor="width">
                        Ширина, см
                    </label>
                    <input
                        id="width"
                        className="modalInput description__input good-dimensions__input"
                        defaultValue={card ? card.dimensions.width : ''}
                        {...register('width')}
                    />
                </div>
                <div className="description__block">
                    <label className="label" htmlFor="height">
                        Высота, см
                    </label>
                    <input
                        id="height"
                        className="modalInput description__input good-dimensions__input"
                        defaultValue={card ? card.dimensions.height : ''}
                        {...register('height')}
                    />
                </div>
                <div className="description__block">
                    <label className="label" htmlFor="weight">
                        Вес, кг
                    </label>
                    <input
                        id="weight"
                        className="modalInput description__input good-dimensions__input"
                        defaultValue={card ? card.dimensions.weight : ''}
                        {...register('weight')}
                    />
                </div>
            </div>
        </div>
    );
};

export default CreateGoodDimensions;
