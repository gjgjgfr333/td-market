import React, {useEffect, useState} from 'react';
import './form-create-good.scss'
import '../../../styles/elements/selects.scss'
import AsyncSelect from "react-select/async";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {fetchCategories} from "../../../store/reducers/categories/CategoriesCreators";
import Select from "react-select";
import {ICategory, ISubcategories} from "../../../models/ICategories";

const FormCreateGood = () => {
    const dispatch = useAppDispatch();
    const {categories} = useAppSelector(state => state.categoriesReducer);
    const [selectedCategory, setSelectedCategory] = useState<ICategory | null>(null);
    const [selectedSubcategory, setSelectedSubcategory] = useState<ISubcategories | null>(null);
    const [isSubcategoryDisabled, setIsSubcategoryDisabled] = useState(true);
    const [subcategories, setSubcategories] = useState<Array<{value: string, label: string}>>([]);


    useEffect(() => {
        if (categories.length < 1) {
            dispatch(fetchCategories());
        }
    }, [categories, dispatch]);

    const loadCategories = (
        inputValue: string,
        callback: (options: any[]) => void,
        selectedCategory: {name: string, children: Array<any>} | null
    ) => {
        const filteredCategories = categories.filter(category =>
            category.name.toLowerCase().includes(inputValue.toLowerCase())
        );

        const options = filteredCategories.map(category => ({
            value: category.name,
            label: category.name
        }));

        callback(options);

        if (selectedCategory && !filteredCategories.find(c => c.name === selectedCategory.name)) {
            // Если выбранная категория больше не проходит фильтр, сбросьте ее.
            setSelectedCategory(null);
        }
    };

    const onChangeCategory = (e: any) => {
        const {value} = e
        console.log('value', value)
            const option = categories.find(
                (category) => category.name.toLowerCase() === value.toLowerCase()
            );
            console.log('option', option)
            if (option) {
                setSelectedCategory(option);
                setSubcategories(option.children.map((subcategory: { name: any; }) => ({ value: subcategory.name, label: subcategory.name })));
            }
    };

    const onChangeSubcategory = (e: any) => {
        const {value} = e
        console.log('value', value)
        // const option = subcategories.find(
        //     (category) => category.name.toLowerCase() === value.toLowerCase()
        // );
        // console.log('option', option)
        // if (option) {
        //     setSelectedCategory(option);
        //     setSubcategories(option.children.map((subcategory: { name: any; }) => ({ value: subcategory.name, label: subcategory.name })));
        // }
    };

    useEffect(() => {
        if (selectedCategory) {
            console.log('selectedCategory', selectedCategory)
            setIsSubcategoryDisabled(false)
        }
    }, [selectedCategory, isSubcategoryDisabled])

    useEffect(() => {
        console.log('subcategories', subcategories)
    }, [subcategories])

    return (
        <div className={'create'}>
            <h3 className={'create__title'}>Создание карточки товара</h3>
            <div className={'create__form'}>
                <label className={'label'}>Категория</label>
                <AsyncSelect
                    defaultOptions={true}
                    placeholder={'Выбрать категорию'}
                    className={'select-input create__select'}
                    classNamePrefix={'select'}
                    loadOptions={(inputValue, callback) =>
                        loadCategories(inputValue, callback, selectedCategory)
                    }
                    // onInputChange={onChangeCategory}
                    value={selectedCategory ? { value: selectedCategory.name, label: selectedCategory.name } : null}
                    onChange={onChangeCategory}
                />
            </div>
            <div className={'create__form'}>
                <label className={'label'}>Подкатегория</label>
                <Select
                    placeholder={'Выбрать подкатегорию'}
                    className={'select-input create__select'}
                    classNamePrefix={'select'}
                    isDisabled={isSubcategoryDisabled}
                    options={subcategories}
                    onInputChange={onChangeSubcategory}
                    value={selectedSubcategory ? { value: selectedSubcategory.name, label: selectedSubcategory.name } : null}
                />
            </div>
        </div>
    );
};

export default FormCreateGood;