import React, {ReactNode} from 'react';
import './box-category.scss'
import {Link} from "react-router-dom";
import Select from "react-select";

interface IProps {
    children: ReactNode,
}

const BoxCategory = ({children}: IProps) => {
    return (
        <div className={'category'}>
            <div className={'category__header'}>
                <div className={'category__categories'}>
                    <Link to={'/'}>Главная</Link> / <Link to={'/'}>Женская одежда</Link> / <Link to={'/'}>Платья</Link>
                </div>
                <div className={'select'}>
                    <span className={'select__label'}>Показать товары:</span>
                    <Select
                        // options={goodsOptions}
                        // defaultValue={goodsOptions[0]}
                        className={'select-input favorites__select-input'}
                        classNamePrefix={'select'}
                        isSearchable={false}
                    />
                </div>
            </div>
            <div className={'category__main'}>
                <div className={'category__aside'}>
                    <h3>Цена, руб</h3>
                    <button className={'button button_light category__button'}>Очистить всё</button>
                </div>
                <div className={'category__container'}>
                    {children}
                </div>
            </div>

        </div>
    );
};

export default BoxCategory;
