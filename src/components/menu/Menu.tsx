import React, {Dispatch, useEffect, useState} from 'react';
import './menu.scss'
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {fetchCategories} from "../../store/reducers/categories/CategoriesCreators";
import {ISubcategories} from "../../models/ICategories";

const Menu = () => {
    const [isPressed, setIsPressed] = useState(false)
    const dispatch = useAppDispatch()
    const {categories} = useAppSelector(state => state.categoriesReducer)
    const [activeCategory, setActiveCategory] = useState(0)
    // @ts-ignore
    const [selectCategory, setSelectCategory]: [ISubcategories[] | null, Dispatch<any>] = useState<any[]>(null)

    useEffect(() => {
        dispatch(fetchCategories())
    }, [dispatch])

    useEffect(() => {
        console.log('categories',categories)
    }, [categories])

    useEffect(() => {
        if (categories.length > 0) {
            setSelectCategory(categories[activeCategory].children)
        }
    }, [categories, activeCategory])

    const onSelectCategory = (index: number) => {
        setActiveCategory(index)
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
                            <div onClick={() => onSelectCategory(index)} className={`main-categories__item ${index === activeCategory && 'active'}`}
                                 key={index}>
                                <img className={'icon'} src={categ.icon} alt=""/>
                                <div>
                                    {categ.name}
                                </div>
                                <img className={'arrow'} src="/images/svg/arrow-right.svg" alt=""/>
                            </div>
                        ))
                    }
                </div>
                <div className={'subcategories'}>
                    {selectCategory && selectCategory.map((subcat, index) => (
                        <div key={index}>
                            <h3 className={'subcategory'}>{subcat.name}</h3>
                            <div className={'sections'}>
                                {subcat.children.map((section, index) => (
                                    <a className={''} href={'/'} key={index}>{section.name}</a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Menu;