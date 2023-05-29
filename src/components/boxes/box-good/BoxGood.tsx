import React, {useMemo, useState} from 'react';
import './box-good.scss'
import '../../../styles/elements/buttons.scss'
import {Link, useLocation} from "react-router-dom";
import {IProductCard} from "../../../models/IProductCard";

const BoxGood = () => {
    const location = useLocation();
    const card: IProductCard = useMemo(() => {
        return location.state
    }, [location.state])

    const additionalPhotos = useMemo(() => {
        const newPhotos = [...card.additionalPhotos];
        const middleIndex = Math.floor(newPhotos.length / 2);
        newPhotos.splice(middleIndex, 0, card.mainPhoto);
        return newPhotos;
    }, [card.additionalPhotos, card.mainPhoto]);

    const [mainPhoto, setMainPhoto] = useState(card.mainPhoto);
    const [count, setCount] = useState(1)

    const handleAdditionalPhotoClick = (photo: string) => {
        setMainPhoto(photo);
    };

    const onSetCount = (operator: '+' | '-') => {
        if (operator === '+') {
            if (count >= card.pricesAndQuantity.quantity) return
            setCount(count + 1)
        } else if (operator === '-') {
            if (count <= 1) return;
            setCount(count + 1)
        }
    }

    return (
        <div className={'good'}>
            <div className={'good__categories'}>
                <Link to={'/'}>Главная</Link> / <Link to={'/'}>Все категории</Link> / <Link to={'/'}>Женская одежда</Link> / <Link to={'/'}>Платья</Link>
            </div>
            <div className={'good-wrapper'}>
                <div className={'good-additional-photos'}>
                    {additionalPhotos.map((photo, index) => (
                        <div className={'good-additional-photos__item'}>
                            <img
                                src={photo}
                                alt="Дополнительная фотография"
                                key={index}
                                onClick={() => handleAdditionalPhotoClick(photo)}
                            />
                        </div>
                    ))}

                </div>
                <div className={'main-photo'}>
                    <img src={mainPhoto} alt={card.information.name}/>
                </div>
                <div className={'good-information'}>
                    <h2>
                        {card.information.name}
                    </h2>
                    <div>
                        Количество: {count}
                    </div>
                    <div>
                        <div>
                            <span onClick={() => onSetCount('-')}>-</span>
                            <span>{count}</span>
                            <span onClick={() => onSetCount('+')}>+</span>
                        </div>
                        <div>
                            В наличии: {card.pricesAndQuantity.quantity}
                        </div>
                    </div>
                    <div>
                        {card.pricesAndQuantity.quantity ? card.pricesAndQuantity.quantity : card.pricesAndQuantity.price} RUP
                        {card.pricesAndQuantity.quantity && card.pricesAndQuantity.price} RUP
                    </div>
                    <div>
                        <button className={'button button_light'}>
                            Добавить в корзину
                        </button>
                        <button className={'button button_dark'}>
                            Купить сейчас
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BoxGood;
