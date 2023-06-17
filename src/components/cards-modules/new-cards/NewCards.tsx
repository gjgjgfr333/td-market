import TitleCards from "../../title-cards/TitleCards";
import React, {useEffect, useState} from "react";
import {GoodsService} from "../../../services/GoodsService";
import {IProductCard} from "../../../models/IProductCard";
import ProductCard from "../../cards/product-card/ProductCard";
import WrapperCard from "../../wrappers/wrapper-card/WrapperCard";

const NewCards = () => {
    const [newCards, setNewCards] = useState<IProductCard[]>([]);

    // useEffect(() => {
    //     console.log('newCards', newCards)
    // }, [newCards])

    useEffect(() => {
        const fetchNewCards = async () => {
            try {
                const response = await GoodsService.getNewGoods(1, 10);
                setNewCards(response.data.productCards);
            } catch (error) {
                console.log('Ошибка при получении карточек товаров:', error);
            }
        };

        fetchNewCards();
    }, []);


    return (
        <div>
            <TitleCards text={'Новинки'}/>
            <WrapperCard>
                {newCards?.length > 0 && newCards.map((card, index) => (
                    <ProductCard card={card} key={index}/>
                )) }
            </WrapperCard>
        </div>
    );
};

export default NewCards;
