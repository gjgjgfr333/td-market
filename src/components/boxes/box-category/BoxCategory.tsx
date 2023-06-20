import React from 'react';
import './box-category.scss'
import {Link} from "react-router-dom";
import Select from "react-select";
import CategoryCards from "../../cards-modules/category-cards/CategoryCards";

const BoxCategory = () => {
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
            <CategoryCards/>
        </div>
    );
};

export default BoxCategory;
