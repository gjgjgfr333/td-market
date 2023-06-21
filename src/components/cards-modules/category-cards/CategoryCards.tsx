import React, {useEffect, useState} from 'react';
import {IProductCard} from "../../../models/IProductCard";
import {GoodsService} from "../../../services/GoodsService";
import {useParams} from "react-router-dom";
import ProductCard from "../../cards/product-card/ProductCard";
import WrapperCard from "../../wrappers/wrapper-card/WrapperCard";
import TitleCards from "../../title-cards/TitleCards";

interface CategoryCardsProps {
    id?: string; // Сделаем `id` необязательным в пропсах
    title?: string; // Сделаем `id` необязательным в пропсах
}

const CategoryCards = ({ id, title }: CategoryCardsProps) => {
    const { id: paramsId } = useParams();
    const [categoryCards, setCategoryCards] = useState<IProductCard[]>([]);

    useEffect(() => {
        const fetchCategoryCards = async () => {
            try {
                const categoryId = id || paramsId; // Проверяем пропс `id`, иначе используем `paramsId`
                if (categoryId) {
                    const response = await GoodsService.getCategoryGoods(categoryId, 1, 10);
                    setCategoryCards(response.data.productCards);
                }
            } catch (error) {
                console.log('Ошибка при получении карточек товаров:', error);
            }
        };

        fetchCategoryCards();
    }, [id, paramsId]);

    return (
        <div>
            {title && <TitleCards text={title}/>}
            <WrapperCard>
                {categoryCards.length > 0 &&
                    categoryCards.map((card, index) => <ProductCard card={card} key={index} />)}
            </WrapperCard>
        </div>

    );
};

export default CategoryCards;
