import React, {useEffect, useState} from 'react';
import TitleCards from "../../title-cards/TitleCards";
import WrapperCard from "../../wrappers/wrapper-card/WrapperCard";
import {IProductCard} from "../../../models/IProductCard";
import {GoodsService} from "../../../services/GoodsService";
import ProductCard from "../../cards/product-card/ProductCard";

const HotCards = () => {
    const [hotCards, setHotCards] = useState<IProductCard[]>([]);

    useEffect(() => {
        const fetchHotCards = async () => {
            try {
                const response = await GoodsService.getHotGoods(1, 10);
                setHotCards(response.data.productCards);
            } catch (error) {
                console.log('Ошибка при получении карточек товаров:', error);
            }
        };

        fetchHotCards();
    }, []);

    return (
        <div>
            <TitleCards text={'Горячие предложения'}/>
            <WrapperCard>
                {hotCards?.length > 0 && hotCards.map((card, index) => (
                    <ProductCard card={card} key={index}/>
                )) }
            </WrapperCard>
        </div>
    );
};

export default HotCards;
