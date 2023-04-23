import React, {ChangeEvent, useState} from 'react';

interface DeliveryPoint {
    city: string;
    address: string;
    shopName: string;
    notes: string;
}

function DeliveryPointsForm() {
    const [deliveryPoints, setDeliveryPoints] = useState<DeliveryPoint[]>([
        {
            city: '',
            address: '',
            shopName: '',
            notes: ''
        }
    ]);

    const addDeliveryPoint = () => {
        setDeliveryPoints([...deliveryPoints, { city: '', address: '', shopName: '', notes: '' }]);
    };

    const handleDeliveryPointChange = (index: number, event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        const updatedDeliveryPoints = [...deliveryPoints];
        updatedDeliveryPoints[index] = {
            ...updatedDeliveryPoints[index],
            [name]: value
        };
        setDeliveryPoints(updatedDeliveryPoints);
    };

    return (
        <div>
            {deliveryPoints.map((deliveryPoint, index) => (
                <fieldset className={'form-shop__block-2'} key={index}>
                    <legend className={'legend'}>Пункты выдачи</legend>
                    <p className={'form-shop__p form-shop__p_address'}>
                        Добавьте адреса пунктов выдачи, в которых покупатель сможет забрать заказ, оформленный в Вашем магазине.
                    </p>
                    <div className={'input-box'}>
                        <label className={'label required'} htmlFor={`city-shop-${index}`}>Город, населённый пункт</label>
                        <input
                            type="text"
                            id={`city-shop-${index}`}
                            name="city"
                            placeholder={'Введите название города'}
                            className={'modalInput form-shop__short'}
                            value={deliveryPoint.city}
                            onChange={(event) => handleDeliveryPointChange(index, event)}
                            required
                        />
                    </div>
                    <div className={'input-box'}>
                        <label className={'label required'} htmlFor={`point-shop-${index}`}>Адрес</label>
                        <input
                            type="text"
                            id={`point-shop-${index}`}
                            name="address"
                            placeholder={'Введите адрес пункта выдачи'}
                            className={'modalInput'}
                            value={deliveryPoint.address}
                            onChange={(event) => handleDeliveryPointChange(index, event)}
                            required
                        />
                    </div>
                    <div className={'input-box'}>
                        <label className={'label'} htmlFor={`shop-shop-${index}`}>Название магазина, торгового центра, рынка</label>
                        <input
                            type="text"
                            id={`shop-shop-${index}`}
                            name="shopName"
                            placeholder={'Введите название'}
                            className={'modalInput'}
                            value={deliveryPoint.shopName}
                            onChange={(event) => handleDeliveryPointChange(index, event)}
                        />
                    </div>
                    <div className={'input-box'}>
                        <label className={'label'} htmlFor={`notes-shop-${index}`}>Примечания</label>
                        <input
                            type="text"
                            id={`notes-shop-${index}`}
                            name="notes"
                            placeholder={'Введите примечания'}
                            className={'modalInput'}
                            value={deliveryPoint.notes}
                            onChange={(event) => handleDeliveryPointChange(index, event)}
                        />
                    </div>
                </fieldset>
            ))}
            <button type="button" className={'button button_light form-shop__add'} onClick={addDeliveryPoint}>
                Добавить ещё пункт выдачи
            </button>
        </div>
    )
}

export default DeliveryPointsForm;