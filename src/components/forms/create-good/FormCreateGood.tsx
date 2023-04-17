import React, {useEffect, useState} from 'react';
import './form-create-good.scss'
import '../../../styles/elements/selects.scss'
import AsyncSelect from "react-select/async";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {fetchCategories} from "../../../store/reducers/categories/CategoriesCreators";
import Select, {InputActionMeta} from "react-select";

const FormCreateGood = () => {
    const dispatch = useAppDispatch();
    const {categories} = useAppSelector(state => state.categoriesReducer);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedSubcategory, setSelectedSubcategory] = useState('');
    const [isSubcategoryDisabled, setIsSubcategoryDisabled] = useState(true);

    useEffect(() => {
        if (categories.length < 1) {
            dispatch(fetchCategories());
        }
    }, [categories, dispatch]);

    const loadCategories = (
        inputValue: string,
        callback: (options: any[]) => void,
        selectedCategory: string
    ) => {
        const filteredCategories = categories.filter(category =>
            category.name.toLowerCase().includes(inputValue.toLowerCase())
        );

        const options = filteredCategories.map(category => ({
            value: category.name,
            label: category.name
        }));

        callback(options);

        if (selectedCategory && !filteredCategories.find(c => c.name === selectedCategory)) {
            // Если выбранная категория больше не проходит фильтр, сбросьте ее.
            setSelectedCategory('');
        }
    };

    const onChangeCategory = (
        inputValue: string,
        { action }: InputActionMeta
    ) => {
        if (action === 'set-value') {
            const option = categories.find(
                (category) => category.name.toLowerCase() === inputValue.toLowerCase()
            );
            if (option) {
                setSelectedCategory(option.name);
            }
        }
    };

    const onChangeSubcategory = (
        inputValue: string,
        {action}: InputActionMeta
    ) => {
        if (action === 'set-value') {
            console.log('e', inputValue);
            setSelectedSubcategory(inputValue);
        }
    };

    useEffect(() => {
        if (selectedCategory) {
            setIsSubcategoryDisabled(false)
        }
    }, [selectedCategory, isSubcategoryDisabled])

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
                    onInputChange={onChangeCategory}
                    value={selectedCategory ? { value: selectedCategory, label: selectedCategory } : null}
                    onChange={(option: any) => setSelectedCategory(option?.value ?? '')}
                />
            </div>
            <div className={'create__form'}>
                <label className={'label'}>Подкатегория</label>
                <Select
                    placeholder={'Выбрать подкатегорию'}
                    className={'select-input create__select'}
                    classNamePrefix={'select'}
                    isDisabled={isSubcategoryDisabled}
                    // options={subcategories}
                    // loadOptions={loadCategories}
                    onInputChange={onChangeSubcategory}
                />
            </div>
        </div>
    );
};

export default FormCreateGood;