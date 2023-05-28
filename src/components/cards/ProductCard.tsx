import React from 'react';
import './product-card.scss'
import '../../styles/elements/buttons.scss'
import {IProductCard} from "../../models/IProductCard";

const ProductCard = ({card}: {card: IProductCard }) => {
    return (
        <div className={'card'}>
            <div className={'card__favorites'}>
                <img src="/images/svg/favorite-button-add.svg" alt="Добавить в фавориты"/>
            </div>
            <div className={'card-image'}>
                <img src={card.mainPhoto} alt={card.information.name}/>
            </div>
            <div className={'card__price'}>
                <span className={'price'}>
                    {card.pricesAndQuantity.price} RUP
                </span>
                {
                    card.pricesAndQuantity.priceBeforeDiscount &&
                    <span className={'discount'}>{card.pricesAndQuantity.priceBeforeDiscount} RUP</span>
                }
            </div>
            <div className={'card-name'}>
                {card.information.name}
            </div>
            <button className={'button button_dark'}>
                В корзину
            </button>
        </div>
    );
};

export default ProductCard;
