import React, {useState} from 'react';
import './shelter-card.scss'
import {IProductCard} from "../../../models/IProductCard";
import {API_URL} from "../../../http";
import ButtonBurger from "../../buttons/button-burger/ButtonBurger";

const ShelterCard = ({card}: {card: IProductCard }) => {
    const [isPressed, setIsPressed] = useState(true)

    console.log('card', card)
    return (
        <div className={'shelter-card'}>
            <div className={'shelter-card__header'}>
                <div className={'shelter-card__image'}>
                    <img src={`${API_URL}${card.mainPhoto}`} alt={card.information.name}/>
                </div>
                <div className={'shelter-card__statistic'}>
                    <div className={'shelter-card__burger'}>

                        <ButtonBurger isPressed={isPressed} setIsPressed={setIsPressed} isLittle={true}/>
                    </div>
                </div>
            </div>
            <h4 className={'card-name'}>
                {card.information.name}
            </h4>
            {/*<p>*/}
            {/*    {card.categories.category}*/}
            {/*</p>*/}
        </div>
    );
};

export default ShelterCard;