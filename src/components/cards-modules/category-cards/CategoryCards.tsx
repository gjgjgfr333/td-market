import React, {useEffect, useMemo, useState} from 'react';
import {IProductCard} from "../../../models/IProductCard";
import {GoodsService} from "../../../services/GoodsService";
import {useParams} from "react-router-dom";
import ProductCard from "../../cards/product-card/ProductCard";
import WrapperCard from "../../wrappers/wrapper-card/WrapperCard";
import TitleCards from "../../title-cards/TitleCards";


interface CategoryCardsProps {
    id?: string;
    title?: string;
}

const CategoryCards = ({ id, title }: CategoryCardsProps) => {
    const { id: paramsId } = useParams();
    const [categoryCards, setCategoryCards] = useState<IProductCard[]>([]);
    const [page, setPage] = useState(1);
    const limit = 10

    const fetchCategoryCards = async () => {
        try {
            const categoryId = id || paramsId;
            if (categoryId) {
                const response = await GoodsService.getCategoryGoods(categoryId, page, limit);
                setCategoryCards(prevCards => [...prevCards, ...response.data.productCards]);
            }
        } catch (error) {
            console.log('Ошибка при получении карточек товаров:', error);
        }
    };

    useEffect(() => {
        console.log('fetchCategoryCards, id', id);
        console.log('fetchCategoryCards, paramsId', paramsId);
        console.log('fetchCategoryCards, page', page);
    }, [id, paramsId, page]);

    const handleButtonClick = () => {
        setPage(prevPage => {
            return prevPage + 1;
        });
    };

    useMemo(() => {
        fetchCategoryCards();
    }, [id, paramsId, page]); // Используем useMemo для оптимизации вызова fetchCategoryCards

    return (
        <div>
            {title && <TitleCards text={title}/>}
            <WrapperCard cardsLength={categoryCards.length} handleButtonClick={handleButtonClick}>
                {categoryCards.length > 0 &&
                    categoryCards.map((card, index) => <ProductCard card={card} key={index} />)}
            </WrapperCard>
            {/*{categoryCards.length && categoryCards.length % 10 === 0 && <button onClick={handleButtonClick}>Увеличить значение</button>}*/}
        </div>
    );
};

export default CategoryCards;
