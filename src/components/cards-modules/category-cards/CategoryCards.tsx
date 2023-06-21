import React, {useEffect, useState} from 'react';
import {IProductCard} from "../../../models/IProductCard";
import {GoodsService} from "../../../services/GoodsService";
import {useParams} from "react-router-dom";
import ProductCard from "../../cards/product-card/ProductCard";
import WrapperCard from "../../wrappers/wrapper-card/WrapperCard";

const CategoryCards = () => {
    const { id } = useParams();
    const [categoryCards, setCategoryCards] = useState<IProductCard[]>([]);


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
        <WrapperCard>
            {categoryCards?.length > 0 && categoryCards.map((card, index) => (
                <ProductCard card={card} key={index}/>
            )) }
        </WrapperCard>
    );
};

export default CategoryCards;
