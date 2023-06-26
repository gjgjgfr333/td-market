import React, {useEffect, useMemo, useState} from 'react';
import './box-good.scss'
import '../../../styles/elements/buttons.scss'
import {Link} from "react-router-dom";
import {IProductCard} from "../../../models/IProductCard";
import {API_URL} from "../../../http";
import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation } from "swiper";
import 'swiper/scss';
import "swiper/scss/navigation";

const BoxGood = ({card} : {card: IProductCard}) => {
    // const swiper = useSwiper();
    const additionalPhotos = useMemo(() => {
        const newPhotos = [...card.additionalPhotos];
        const middleIndex = Math.floor(newPhotos.length / 2);
        newPhotos.splice(middleIndex, 0, card.mainPhoto);
        return newPhotos;
    }, [card.additionalPhotos, card.mainPhoto]);

    const [mainPhoto, setMainPhoto] = useState(card.mainPhoto);
    const [count, setCount] = useState(1)
    const [activeSize, setActiveSize] = useState(card.sizeQuantity[0])

    const handleAdditionalPhotoClick = (photo: string) => {
        setMainPhoto(photo);
    };

    const onSetCount = (operator: '+' | '-') => {
        console.log('operator', operator)
        if (operator === '+') {
            if (count >= card.pricesAndQuantity.quantity) return
            setCount(count + 1)
        } else if (operator === '-') {
            if (count <= 1) return;
            setCount(count - 1)
        }
    }


    useEffect(() => {
        console.log('card', card)
    }, [card])
    // const handleSlidePrev = () => {
    //     if (swiper) {
    //         swiper.slidePrev();
    //     }
    // };
    //
    // const handleSlideNext = () => {
    //     if (swiper) {
    //         swiper.slideNext();
    //     }
    // };

    return (
        <div className={'good'}>
            <div className={'good__categories'}>
                <Link to={'/'}>Главная</Link> / <Link to={'/'}>Все категории</Link> / <Link to={'/'}>Женская одежда</Link> / <Link to={'/'}>Платья</Link>
            </div>
            <div className={'good-wrapper'}>
                <div className={'good-additional-photos'}>
                    {/*<div className="custom-navigation">*/}
                    {/*    <button className={'custom-navigation__up'} onClick={handleSlidePrev}>Previous</button>*/}
                    {/*    <button className={'custom-navigation__down'} onClick={handleSlideNext}>Next</button>*/}
                    {/*</div>*/}
                    <Swiper
                        direction={'vertical'}
                        slidesPerView={3}
                        spaceBetween={20}
                        modules={[Navigation]}
                        className={'good-additional-photos__slider'}
                    >
                        {additionalPhotos.map((photo, index) => (
                            <SwiperSlide className={'good-additional-photos__slider-item'} key={index}>
                                <div className={'good-additional-photos__item'} key={index}>
                                    <img
                                        src={`${API_URL}${photo}`}
                                        alt="Дополнительная фотография"
                                        onClick={() => handleAdditionalPhotoClick(photo)}
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className={'main-photo'}>
                    <img src={`${API_URL}${mainPhoto}`} alt={card.information.name}/>
                </div>
                <div className={'good-information'}>
                    <h2 className={'good-information__title'}>
                        {card.information.name}
                    </h2>
                    {card.sizeQuantity.length > 0 && <div className={'good-information__sizes'}>
                        <p className={'good-information__subtitle'}>Размер:</p>
                        <div className={'sizes'}>
                            {card.sizeQuantity.map((size, index) => (
                                <div
                                    className={`size-item ${size.size === activeSize.size && 'active'}`}
                                    key={index} onClick={() => setActiveSize(size)}
                                >
                                    <span>
                                        {size.size}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <p className={'good-information__subtitle'}>Таблица размеров</p>
                    </div>}
                    <div className={'good-information__count'}>
                        Количество: {count}
                    </div>
                    <div className={'good-information__update-count'}>
                        <div className={'good-information__update-button'}>
                            <span className={'update update_minus'} onClick={() => onSetCount('-')}>
                                <img src="/images/svg/little-minus.svg" alt="На один товар меньше заказать"/>
                            </span>
                            <span className={'count'}>{count}</span>
                            <span className={'update update_plus'} onClick={() => onSetCount('+')}>
                                <img src="/images/svg/little-plus.svg" alt="На один товар меньше заказать"/>
                            </span>
                        </div>
                        <div className={'good-information__quantity'}>
                            В наличии: {card.pricesAndQuantity.quantity}
                        </div>
                    </div>
                    <div className={'good-information__prices'}>
                        <span className={'good-information__priceBeforeDiscount'}>
                            {card.pricesAndQuantity.priceBeforeDiscount ? card.pricesAndQuantity.priceBeforeDiscount : card.pricesAndQuantity.price} RUP
                        </span>
                        <span className={'good-information__price'}>
                            {card.pricesAndQuantity.quantity && card.pricesAndQuantity.price} RUP
                        </span>
                    </div>
                    <div className={'good-information__buttons'}>
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
