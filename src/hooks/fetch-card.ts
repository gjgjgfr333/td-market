import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { IProductCard } from "../models/IProductCard";
import {GoodsService} from "../services/GoodsService";

const useFetchCard = (): IProductCard | null => {
    const location = useLocation();
    const { id } = useParams();
    const [card, setCard] = useState<IProductCard | null>(null);

    useEffect(() => {
        const fetchCard = async () => {
            if (location.state) {
                setCard(location.state);
            } else if (id) {
                try {
                    const fetchedCard = await GoodsService.getGood(id);
                    setCard(fetchedCard.data);
                } catch (error) {
                    console.error("Error fetching card:", error);
                }
            }
        };

        fetchCard();
    }, [id, location.state]);

    return card;
};

export default useFetchCard;
