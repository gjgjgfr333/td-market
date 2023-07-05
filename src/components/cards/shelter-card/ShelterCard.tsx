import React, {useState} from 'react';
import './shelter-card.scss'
import {IProductCard} from "../../../models/IProductCard";
import {API_URL} from "../../../http";
import ButtonBurger from "../../buttons/button-burger/ButtonBurger";
import {ShelterService} from "../../../services/ShelterService";

const ShelterCard = ({card}: {card: IProductCard }) => {
    const [isPressed, setIsPressed] = useState(false)

    const onDelete = async (id: string) => {
        await ShelterService.deleteCard(id)
    }

    return (
        <div className={'shelter-card'}>
            <div className={'shelter-card__header'}>
                <div className={'shelter-card__image'}>
                    <img src={`${API_URL}${card.mainPhoto}`} alt={card.information.name}/>
                </div>
                <div className={'shelter-card__statistic'}>
                    <div className={'shelter-card__tools'}>
                        <div className={'shelter-card__burger'}>

                            <ButtonBurger isPressed={isPressed} setIsPressed={setIsPressed} isLittle={true}/>
                        </div>
                        <div className={`card-tools ${isPressed && 'active'}`}>
                            <div className={'card-tools__item'}>
                                <span>редактировать</span>
                            </div>
                            <div className={'card-tools__item'}>
                                <span>количество на складе</span>
                            </div>
                            <div className={'card-tools__item'} onClick={() => onDelete(card._id)}>
                                <span>удалить</span>
                            </div>
                        </div>
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