import React, {useEffect, useState} from 'react';
import {IProductCard} from "../../../models/IProductCard";
import {GoodsService} from "../../../services/GoodsService";
import {useParams} from "react-router-dom";

const CategoryCards = () => {
    const { id } = useParams();
    const [categoryCards, setCategoryCards] = useState<IProductCard[]>([]);

    useEffect(() => {
        console.log('categoryCards', categoryCards)
    }, [categoryCards])

    useEffect(() => {
        const fetchCategoryCards = async () => {
            try {
                if (id) { // Проверяем, что id не является undefined
                    const response = await GoodsService.getCategoryGoods(id, 1, 10);
                    setCategoryCards(response.data.productCards);
                }
            } catch (error) {
                console.log('Ошибка при получении карточек товаров:', error);
            }
        };

        fetchCategoryCards();
    }, [id]);

    return (
        <div>

        </div>
    );
};

export default CategoryCards;