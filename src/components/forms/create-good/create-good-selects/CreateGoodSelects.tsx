import React, {useEffect, useState} from 'react';
import './сreate-good-selects.scss'
import AsyncSelect from "react-select/async";
import Select from "react-select";
import {useAppDispatch, useAppSelector} from "../../../../hooks/redux";
import {ICategory, ISections, ISubcategories} from "../../../../models/ICategories";
import {fetchCategories} from "../../../../store/reducers/categories/CategoriesCreators";

const CreateGoodSelects = () => {
    const dispatch = useAppDispatch();
    const {categories} = useAppSelector(state => state.categoriesReducer);
    const [selectedCategory, setSelectedCategory] = useState<ICategory | null>(null);
    const [isSubcategoryDisabled, setIsSubcategoryDisabled] = useState(true);
    const [subcategories, setSubcategories] = useState<Array<ISubcategories>>([]);
    const [selectedSubCategory, setSelectedSubCategory] = useState<ISubcategories | null>(null);
    const [isTypeDisabled, setIsTypeDisabled] = useState(true);
    const [types, setTypes] = useState<Array<ISections>>([]);
    const [selectedType, setSelectedType] = useState<ISections | null>(null);


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
        const option = categories.find(
            (category) => category.name.toLowerCase() === value.toLowerCase()
        );
        if (option) {
            if (selectedCategory && selectedCategory.name !== value) {
                setSelectedSubCategory(null)
                setSelectedType(null)
            }
            setSelectedCategory(option);
            setSubcategories(option.children);
        }
    };

    const onChangeSubcategory = (e: any) => {
        const {value} = e
        const option = subcategories.find(
            (category) => category.name.toLowerCase() === value.toLowerCase()
        );
        if (option) {
            if (selectedSubCategory && selectedSubCategory.name !== value) {
                setSelectedType(null)
            }
            setSelectedSubCategory(option);
            setTypes(option.children)
        }
    };

    const onChangeType = (e: any) => {
        const {value} = e
        const option = types.find(
            (type) => type.name.toLowerCase() === value.toLowerCase()
        );
        if (option) {
            setSelectedType(option);
        }
    };

    useEffect(() => {
        if (selectedCategory) {
            setIsSubcategoryDisabled(false)
        }
    }, [selectedCategory, isSubcategoryDisabled])

    useEffect(() => {
        if (selectedSubCategory) {
            setIsTypeDisabled(false)
        }
    }, [selectedSubCategory, isTypeDisabled])

    return (
        <>
            <div className={'form-select'}>
                <label className={'label'}>Категория</label>
                <AsyncSelect
                    defaultOptions={true}
                    placeholder={'Выбрать категорию'}
                    className={'select-input form-select__select'}
                    classNamePrefix={'select'}
                    loadOptions={(inputValue, callback) =>
                        loadCategories(inputValue, callback, selectedCategory)
                    }
                    value={selectedCategory ? { value: selectedCategory.name, label: selectedCategory.name } : null}
                    onChange={onChangeCategory}
                />
            </div>
            <div className={'form-select'}>
                <label className={'label'}>Подкатегория</label>
                <Select
                    placeholder={'Выбрать подкатегорию'}
                    className={'select-input form-select__select'}
                    classNamePrefix={'select'}
                    isDisabled={isSubcategoryDisabled}
                    options={subcategories.map((subcategory: { name: any; }) => ({ value: subcategory.name, label: subcategory.name }))}
                    value={selectedSubCategory ? { value: selectedSubCategory.name, label: selectedSubCategory.name } : null}
                    onChange={onChangeSubcategory}
                />
            </div>
            <div className={'form-select'}>
                <label className={'label'}>Тип</label>
                <Select
                    placeholder={'Выбрать тип'}
                    className={'select-input form-select__select'}
                    classNamePrefix={'select'}
                    isDisabled={isTypeDisabled}
                    options={types.map((type: { name: any; }) => ({ value: type.name, label: type.name }))}
                    value={selectedType ? { value: selectedType.name, label: selectedType.name } : null}
                    onChange={onChangeType}
                />
            </div>
        </>
    );
};

export default CreateGoodSelects;
