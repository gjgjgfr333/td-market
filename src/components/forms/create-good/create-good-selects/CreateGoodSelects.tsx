import React, {useEffect, useState} from 'react';
import './сreate-good-selects.scss'
import Select from "react-select";
import {useAppDispatch, useAppSelector} from "../../../../hooks/redux";
import {ICategory, ISections, ISubcategories} from "../../../../models/ICategories";
import {fetchCategories} from "../../../../store/reducers/categories/CategoriesCreators";

interface IProps {
    selectedCategory: ICategory | null;
    setSelectedCategory: (category: ICategory | null) => void;
    selectedSubCategory: ISubcategories | null;
    setSelectedSubCategory: (subcategory: ISubcategories | null) => void;
    selectedType: ISections | null;
    setSelectedType: (type: ISections | null) => void;
}


const CreateGoodSelects = ({
                               selectedCategory,
                               setSelectedCategory,
                               selectedSubCategory,
                               setSelectedSubCategory,
                               selectedType,
                               setSelectedType
                           }: IProps) => {
    const dispatch = useAppDispatch();
    const {categories} = useAppSelector(state => state.categoriesReducer);
    const [isSubcategoryDisabled, setIsSubcategoryDisabled] = useState(true);
    const [subcategories, setSubcategories] = useState<Array<ISubcategories>>([]);
    const [isTypeDisabled, setIsTypeDisabled] = useState(true);
    const [types, setTypes] = useState<Array<ISections>>([]);



    useEffect(() => {
        console.log('categories', categories)
    }, [categories])

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
        console.log('hey bro')
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
                <Select
                    placeholder={'Выбрать категорию'}
                    className={'select-input form-select__select'}
                    classNamePrefix={'select'}
                    options={categories.map((category: { name: any; }) => ({ value: category.name, label: category.name }))}
                    value={selectedCategory ? { value: selectedCategory.name, label: selectedCategory.name } : null}
                    onChange={onChangeCategory}
                    isDisabled={categories.length > 1}
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
