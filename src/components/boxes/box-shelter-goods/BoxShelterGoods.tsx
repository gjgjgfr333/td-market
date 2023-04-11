import React from 'react';
import './box-shelter-goods.scss'

const BoxShelterGoods = () => {
    return (
        <div className={'goods'}>
            <div>
                <div>
                    <span>Показать товары</span>
                    <select></select>
                </div>
                <div>
                    <span>Отсортировать</span>
                    <select></select>
                </div>
                <button>Добавить товар</button>
            </div>
        </div>
    );
};

export default BoxShelterGoods;