import React from 'react';
import './box-shelter-goods.scss'

const BoxShelterGoods = () => {
    return (
        <div className={'goods'}>
            <div className={'goods__selects'}>
                <div className={'select'}>
                    <span className={'select__label'}>Показать товары</span>
                    <select>
                        <option>все</option>
                        <option>в продаже</option>
                        <option>нет в наличии</option>
                        <option>отклоненные</option>
                        <option>на модерации</option>
                    </select>
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