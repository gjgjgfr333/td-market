import React, {useEffect, useState} from 'react';
import Header from "../components/headers/header/Header";
import Container from "../components/container/Container";
import Footer from "../components/footers/footer-user/Footer";
import BoxGood from "../components/boxes/box-good/BoxGood";
import BoxGoodInformation from "../components/boxes/box-good-information/BoxGoodInformation";
import {useLocation, useParams} from "react-router-dom";
import {IProductCard} from "../models/IProductCard";
import {GoodsService} from "../services/GoodsService";

const Good = () => {
    const location = useLocation();
    const { id } = useParams();
    const [card, setCard] = useState<IProductCard | null>(null);

    useEffect(() => {
        const fetchCard = async () => {
            if (location.state) {
                setCard(location.state);
            } else if (id) {
                const fetchedCard = await GoodsService.getGood(id);
                setCard(fetchedCard.data);
            }
        };

        fetchCard();
    }, [id, location.state]);

    return (
        <div>
            <Header/>
            <Container>
                {card ?
                    <>
                        <BoxGood card={card}/>
                        <BoxGoodInformation card={card}/>
                    </>
                    :
                    <div>Loading...</div>
                }
            </Container>
            <Footer/>
        </div>
    );
};

export default Good;
