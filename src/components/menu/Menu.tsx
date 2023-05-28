import React, {useEffect, useState} from 'react';
import './menu.scss'
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {fetchCategories} from "../../store/reducers/categories/CategoriesCreators";
import {ISections, ISubcategories} from "../../models/ICategories";

const Menu = () => {
    const [isPressed, setIsPressed] = useState(false)
    const dispatch = useAppDispatch()
    const {categories} = useAppSelector(state => state.categoriesReducer)
    const [activeCategory, setActiveCategory] = useState(0)
    const [activeSubCategory, setActiveSubCategory] = useState(0)
    const [selectCategory, setSelectCategory] = useState<ISubcategories[] | null>(null);
    const [selectSubCategory, setSelectSubCategory] = useState<ISections[] | null>(null);

    useEffect(() => {
        dispatch(fetchCategories())
    }, [dispatch])

    useEffect(() => {
        if (categories.length > 0) {
            setSelectCategory(categories[activeCategory].children)
        }
    }, [categories, activeCategory])

    const onSelectCategory = (index: number) => {
        setActiveCategory(index)
    }

    const onSelectSubCategory = (subcat: ISubcategories, index: number) => {
        setActiveSubCategory(index)
        setSelectSubCategory(subcat.children)
    }

    return (
        <div>
            <div className={'hamburger-container'}>
                <div className={`hamburger ${isPressed && 'active'}`} onClick={() => setIsPressed(!isPressed)}>
                    <div className={`hamburger__item line-1 ${isPressed && 'active'}`}/>
                    <div className={'hamburger__item line-2'}/>
                    <div className={'hamburger__item line-3'}/>
                </div>
            </div>
            <div className={`menu ${isPressed && 'active'}`}>
                <div className={'main-categories'}>
                    {
                        categories.map((categ, index) => (
                            <div
                                onClick={() => onSelectCategory(index)}
                                className={`main-categories__item ${index === activeCategory && 'active'}`}
                                key={index}
                            >
                                <img className={'icon'} src={categ.icon} alt=""/>
                                <div>
                                    {categ.name}
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className={'subcategories'}>
                    {/*{selectCategory && selectCategory.map((subcat, index) => (*/}
                    {/*    <div key={index}>*/}
                    {/*        <h3 className={'subcategory'}>{subcat.name}</h3>*/}
                    {/*        <div className={'sections'}>*/}
                    {/*            {subcat.children.map((section, index) => (*/}
                    {/*                <a className={''} href={'/'} key={index}>{section.name}</a>*/}
                    {/*            ))}*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*))}*/}
                    {selectCategory && selectCategory.map((subcat, index) => (
                        <div
                            className={`subcategory-wrapper ${index === activeSubCategory && 'active'}`}
                            key={index} onClick={() => onSelectSubCategory(subcat ,index)}
                        >
                            <h3 className={'subcategory'}>{subcat.name}</h3>
                            {selectSubCategory && selectSubCategory?.length > 0 &&
                                <img src={ index === activeSubCategory ? '/images/svg/arrow-right.svg' : '/images/svg/arrow-right-noactive.svg'}
                                     alt={'Посмотреть подкатегории'}/>}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Menu;