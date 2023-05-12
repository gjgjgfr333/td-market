import React, {useEffect, useState} from 'react';
import './form-create-good.scss'
import '../../../styles/elements/selects.scss'
import '../../../styles/elements/buttons.scss'
import CreateGoodSelects from "./create-good-selects/CreateGoodSelects";
import CreateGoodDescription from "./create-good-description/CreateGoodDescription";
import CreateGoodPhotos from "./create-good-photos/CreateGoodPhotos";
import CreateGoodAdditional from "./create-good-additional/CreateGoodAdditional";
import CreateGoodPrice from "./create-good-price/CreateGoodPrice";
import CreateGoodDimensions from "./create-good-dimensions/CreateGoodDimensions";
import CreateGoodPoints from "./create-good-points/CreateGoodPoints";
import {ICategory, ISections, ISubcategories} from "../../../models/ICategories";

const FormCreateGood = () => {

    const [parentSelectedCategory, setParentSelectedCategory] = useState<ICategory | null>(null);
    const [parentSelectedSubCategory, setParentSelectedSubCategory] = useState<ISubcategories | null>(null);
    const [parentSelectedType, setParentSelectedType] = useState<ISections | null>(null);
    const [descriptionGood, setDescriptionGood] = useState({
        name: '',
        description: ''
    });

    useEffect(() => {
        console.log('descriptionGood', descriptionGood)
    }, [descriptionGood])

    return (
        <div className={'create'}>
            <h3 className={'create__title'}>Создание карточки товара</h3>
            <CreateGoodSelects
                selectedCategory={parentSelectedCategory}
                setSelectedCategory={setParentSelectedCategory}
                selectedSubCategory={parentSelectedSubCategory}
                setSelectedSubCategory={setParentSelectedSubCategory}
                selectedType={parentSelectedType}
                setSelectedType={setParentSelectedType}
            />
            <hr className={'create__divider'}/>
            <CreateGoodDescription setDescriptionGood={setDescriptionGood}/>
            <hr className={'create__divider'}/>
            <CreateGoodPhotos/>
            <hr className={'create__divider'}/>
            <CreateGoodAdditional/>
            <hr className={'create__divider'}/>
            <CreateGoodPrice/>
            <hr className={'create__divider'}/>
            <CreateGoodDimensions/>
            <hr className={'create__divider'}/>
            <CreateGoodPoints/>
             <div className={'create__buttons'}>
                     <button className={'button button_dark create__save'}>Сохранить</button>
                     <button className={'button button_light create__add-good'}>Добавить ещё карточку товара</button>
             </div>
        </div>
    );
};

export default FormCreateGood;