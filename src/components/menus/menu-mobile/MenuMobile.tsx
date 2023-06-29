import React, {useState} from 'react';
import './menu-mobile.scss'
import Search from "../../search/Search";
import {useAppSelector} from "../../../hooks/redux";
import {API_URL} from "../../../http";
import {ICategory, ISubcategory} from "../../../models/ICategories";
import {Link, useNavigate} from "react-router-dom";

const MenuMobile = ({isPressed}: {isPressed: boolean}) => {
    const navigate = useNavigate()
    const {categories} = useAppSelector(state => state.categoriesReducer)
    const [activeCategory, setActiveCategory] = useState<ICategory | null>(null)
    const [activeSubCategory, setActiveSubCategory] = useState<ISubcategory | null>(null)

    const onSelectCategory = (categ: ICategory) => {
        setActiveCategory(categ)
        // setSelectSubCategory(null)
    }

    const onBack = (type: 'category' | 'subcategory') => {
        if (type === 'category') {
            setActiveCategory(null)
        } else if (type === 'subcategory') {
            setActiveSubCategory(null)
        }
    }

    const onSelectSubcategory = (subcategory: ISubcategory) => {
        if (subcategory.children.length === 0) {
            navigate(`/category/${subcategory._id}`)
        } else {
            setActiveSubCategory(subcategory)
        }
    }

    return (
        <div className={`mobile-menu ${isPressed && 'active'}`}>
            <div>
                <div className={'mobile-menu__search'}>
                    <Search mobile={true}/>
                </div>
                { !activeCategory && !activeSubCategory &&
                    categories.map((categ) => (
                        <div
                            onMouseEnter={() => onSelectCategory(categ)}
                            className={`main-categories__item`}
                            key={categ._id}
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
                {
                    activeCategory && !activeSubCategory &&
                    <>
                        <div className={'mobile-menu__title'}>
                            <img
                                src="/images/svg/arrow-left-bold.svg"
                                alt="Вернуться назад"
                                onClick={() => onBack('category')}
                            />
                            <Link to={`/category/${activeCategory._id}`} className={'mobile-menu__link'}>
                                {activeCategory.name}
                            </Link>
                        </div>
                        {activeCategory.children.map(subcat => (
                            <div
                                key={subcat._id}
                                className={'mobile-menu__subcategory'}
                                onClick={() => onSelectSubcategory(subcat)}
                            >
                                <div className={'mobile-menu__link_sub'}>
                                    {subcat.name}
                                </div>
                                {subcat.children.length > 0 &&
                                    <img className={'arrow-right'} src={'/images/svg/arrow-right-noactive.svg'}
                                         alt={'Посмотреть подкатегории'}/>
                                }
                            </div>
                        ))}
                    </>
                }
                {
                    activeSubCategory &&
                    <>
                        <div className={'mobile-menu__title'}>
                            <img
                                src="/images/svg/arrow-left-bold.svg"
                                alt="Вернуться назад"
                                onClick={() => onBack('subcategory')}
                            />
                            <Link to={`/category/${activeSubCategory._id}`} className={'mobile-menu__link'}>
                                {activeSubCategory.name}
                            </Link>
                        </div>
                        {activeSubCategory.children.map(section => (
                            <Link
                                to={`/category/${section._id}`}
                                key={section._id}
                                className={'mobile-menu__subcategory'}
                            >
                                <div className={'mobile-menu__link_sub'}>
                                    {section.name}
                                </div>
                            </Link>
                        ))}
                    </>
                }
            </div>

        </div>
    );
};

export default MenuMobile;
