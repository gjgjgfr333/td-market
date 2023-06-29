import React, {useState} from 'react';
import './menu-mobile.scss'
import Search from "../../search/Search";
import {useAppSelector} from "../../../hooks/redux";
import {API_URL} from "../../../http";

const MenuMobile = ({isPressed}: {isPressed: boolean}) => {
    const {categories} = useAppSelector(state => state.categoriesReducer)
    const [activeCategory, setActiveCategory] = useState(0)

    const onSelectCategory = (index: number) => {
        setActiveCategory(index)
        // setSelectSubCategory(null)
    }


    return (
        <div className={`mobile-menu ${isPressed && 'active'}`}>
            <div className={'mobile-menu__search'}>
                <Search mobile={true}/>
            </div>
            {
                categories.map((categ, index) => (
                    <div
                        onMouseEnter={() => onSelectCategory(index)}
                        className={`main-categories__item`}
                        key={index}
                    >
                        <img className={'icon'} src={`${API_URL}${categ.icon}`} alt=""/>
                        <div>
                            {categ.name}
                        </div>
                        <img className={'arrow-right'} src={'/images/svg/arrow-right-noactive.svg'}
                             alt={'Посмотреть подкатегории'}/>
                    </div>
                ))
            }
        </div>
    );
};

export default MenuMobile;
