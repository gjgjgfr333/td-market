import { useEffect } from 'react';
import './create-good-price.scss'
import { useFormContext } from 'react-hook-form';
import {IProductCard} from "../../../../models/IProductCard";

interface IProps {
    isClothes: boolean | null
    card: IProductCard | null
}

const CreateGoodPrice = ({isClothes, card}: IProps) => {
    const { register, watch } = useFormContext();

    const price = watch('price');
    const priceDiscount = watch('priceDiscount');
    const quantityInStock = watch('quantityInStock');

    useEffect(() => {
        // Действия, которые необходимо выполнить при изменении значений полей
    }, [price, priceDiscount, quantityInStock]);

    return (
        <>
            <h3 className="subtitle">Цена и наличие товара</h3>
            <div className="good-price">
                <div className="description__block">
                    <label className="label" htmlFor="price">
                        Цена
                    </label>
                    <input
                        id="price"
                        className="modalInput description__input good-price__input"
                        defaultValue={card ? card.pricesAndQuantity.price : ''}
                        {...register('price')}
                    />
                </div>
                <div className="description__block">
                    <label className="label" htmlFor="priceDiscount">
                        Цена до скидки
                    </label>
                    <input
                        id="priceDiscount"
                        className="modalInput description__input good-price__input"
                        defaultValue={card ? card.pricesAndQuantity.priceBeforeDiscount : ''}
                        {...register('priceDiscount')}
                    />
                </div>
                {!isClothes && <div className="description__block">
                    <label className="label" htmlFor="quantityInStock">
                        Количество на складе (единиц в наличии)
                    </label>
                    <input
                        id="quantityInStock"
                        className="modalInput description__input good-price__input"
                        defaultValue={card ? card.pricesAndQuantity.quantity : ''}
                        {...register('quantityInStock')}
                    />
                </div>}
            </div>
        </>
    );
};

export default CreateGoodPrice;
