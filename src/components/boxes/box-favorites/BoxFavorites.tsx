import React, {useEffect, useState} from 'react';
import {IProductCard} from "../../../models/IProductCard";
import {GoodsService} from "../../../services/GoodsService";

const BoxFavorites = () => {
    const [favoriteCards, setFavoriteCards] = useState<IProductCard[]>([]);

    useEffect(() => {
        const fetchFavoriteCards = async () => {
            try {
                const response = await GoodsService.getHotGoods(1, 10);
                console.log('response favoriteCards', response)
                setFavoriteCards(response.data.productCards);
            } catch (error) {
                console.log('Ошибка при получении карточек товаров:', error);
            }
        };

        fetchFavoriteCards();
    }, []);

    return (
        <div>

        </div>
    );
};

export default BoxFavorites;
