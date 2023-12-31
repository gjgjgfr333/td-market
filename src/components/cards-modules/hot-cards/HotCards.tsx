import React, {useMemo, useState} from 'react';
import TitleCards from "../../title-cards/TitleCards";
import WrapperCard from "../../wrappers/wrapper-card/WrapperCard";
import {IProductCard} from "../../../models/IProductCard";
import {GoodsService} from "../../../services/GoodsService";
import ProductCard from "../../cards/product-card/ProductCard";

const HotCards = ({limit}: {limit: number}) => {
    const [hotCards, setHotCards] = useState<IProductCard[]>([]);
    const [page, setPage] = useState(1);

    const fetchHotCards = async (pageReq: number) => {
        try {
            const response = await GoodsService.getHotGoods(pageReq, limit);
            setHotCards(prevCards => [...prevCards, ...response.data.productCards]);
        } catch (error) {
            console.log('Ошибка при получении карточек товаров:', error);
        }
    };

    const handleButtonClick = () => {
        console.log('page', page)
        setPage(prevPage => {
            return prevPage + 1;
        });
        fetchHotCards(page + 1)
    };

    useMemo(() => {
        fetchHotCards(1);
    }, []);

    return (
        <div>
            <TitleCards text={'Горячие предложения'}/>
            <WrapperCard handleButtonClick={handleButtonClick} cardsLength={hotCards.length} limit={limit}>
                {hotCards?.length > 0 && hotCards.map((card, index) => (
                    <ProductCard card={card} key={index}/>
                )) }
            </WrapperCard>
        </div>
    );
};

export default HotCards;
