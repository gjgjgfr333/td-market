import React, {useEffect, useState} from 'react';
import Container from "../components/container/Container";
import Footer from "../components/footers/footer-user/Footer";
import BoxGood from "../components/boxes/box-good/BoxGood";
import BoxGoodInformation from "../components/boxes/box-good-information/BoxGoodInformation";
import {useLocation, useParams} from "react-router-dom";
import {IProductCard} from "../models/IProductCard";
import {GoodsService} from "../services/GoodsService";
import HotCards from "../components/cards-modules/hot-cards/HotCards";
import NewCards from "../components/cards-modules/new-cards/NewCards";
import MobileNavbar from "../components/mobile-navbar/MobileNavbar";

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
            <MobileNavbar/>
            <Container isWideMobile={true}>
                {card ?
                    <>
                        <BoxGood card={card}/>
                        <BoxGoodInformation card={card}/>
                    </>
                    :
                    <div>Loading...</div>
                }
                <HotCards limit={6}/>
                <NewCards limit={6}/>
            </Container>
            <Footer/>
        </div>
    );
};

export default Good;
