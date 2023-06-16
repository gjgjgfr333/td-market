import React from 'react';
import './box-orders.scss'
import Select from "react-select";

const ordersOptions = [
    {
        value: 'все',
        label: 'все'
    },
    {
        value: 'завершённые',
        label: 'завершённые'
    },
    {
        value: 'ждут подтверждения',
        label: 'ждут подтверждения'
    },
    {
        value: 'ждут отправки',
        label: 'ждут отправки'
    },
    {
        value: 'отправленные',
        label: 'отправленные'
    },
]

const BoxOrders = () => {
    return (
        <div className={'orders'}>
            <div className={'orders__select'}>
                <div className={'select'}>
                    <span className={'select__label'}>Показать товары:</span>
                    <Select
                        options={ordersOptions}
                        defaultValue={ordersOptions[0]}
                        className={'select-input select-input__orders'}
                        classNamePrefix={'select'}
                    />
                </div>
            </div>
            <div className={'orders__titles'}>
                <h4 className={'orders__title orders__title_first'}>
                    Товар
                </h4>
                <h4 className={'orders__title'}>
                    Покупатель
                </h4>
                <h4 className={'orders__title'}>
                    Цена
                </h4>
                <h4 className={'orders__title'}>
                    Кол-во
                </h4>
                <h4 className={'orders__title'}>
                    Оплата
                </h4>
                <h4 className={'orders__title'}>
                    Доставка
                </h4>
                <h4 className={'orders__title'}>
                    Адрес доставки
                </h4>
                <h4 className={'orders__title'}>
                    Статус
                </h4>
            </div>
        </div>
    );
};

export default BoxOrders;
