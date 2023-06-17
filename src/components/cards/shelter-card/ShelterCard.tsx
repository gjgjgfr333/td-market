import React from 'react';
import './shelter-card.scss'
import {IProductCard} from "../../../models/IProductCard";
import {API_URL} from "../../../http";

const ShelterCard = ({card}: {card: IProductCard }) => {
    return (
        <div className={'shelter-card'}>
            <div className={'shelter-card__header'}>
                <div className={'shelter-card__image'}>
                    <img src={`${API_URL}${card.mainPhoto}`} alt={card.information.name}/>
                </div>
            </div>
            <h4 className={'card-name'}>
                {card.information.name}
            </h4>
            <p>
                {card.categories.category}
            </p>
        </div>
    );
};

export default ShelterCard;