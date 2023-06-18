import React from 'react';
import './product-card.scss'
import '../../../styles/elements/buttons.scss'
import {IProductCard} from "../../../models/IProductCard";
import {useNavigate} from "react-router-dom";
import {API_URL} from "../../../http";
import {UserService} from "../../../services/UserService";

const ProductCard = ({card}: {card: IProductCard }) => {
    const navigate = useNavigate()

    // useEffect(() => {
    //     console.log('card', card)
    // }, [card])

    const onClickCard = () => {
        navigate(`/card/${card._id}`, {
            state: {
                ...card
            }
        })
        // console.log('card', card._id)
    }

    const onAddFavorites = async (event: React.MouseEvent<HTMLDivElement>) => {
        console.log('hey brus')
        event.stopPropagation();
        const response = await UserService.addToFavorites(card._id)
        // dispatch()
        console.log('onAddFavorites', response)
    }

    return (
        <div className={'card'} onClick={onClickCard}>
            <div className={'card__favorites'} onClick={onAddFavorites}>
                <img src="/images/svg/favorite-button-add.svg" alt="Добавить в фавориты"/>
            </div>
            <div className={'card-image'}>
                <img src={`${API_URL}${card.mainPhoto}`} alt={card.information.name}/>
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
            <h4 className={'card-name'}>
                {card.information.name}
            </h4>
            <button className={'button button_dark'}>
                В корзину
            </button>
        </div>
    );
};

export default ProductCard;
