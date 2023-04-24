import React from 'react';
import './form-create-good.scss'
import '../../../styles/elements/selects.scss'
import CreateGoodSelects from "./create-good-selects/CreateGoodSelects";
import CreateGoodDescription from "./create-good-description/CreateGoodDescription";
import CreateGoodPhotos from "./create-good-photos/CreateGoodPhotos";

const FormCreateGood = () => {

    return (
        <div className={'create'}>
            <h3 className={'create__title'}>Создание карточки товара</h3>
            <CreateGoodSelects/>
            <hr className={'create__divider'}/>
            <CreateGoodDescription/>
            <hr className={'create__divider'}/>
            <CreateGoodPhotos/>
        </div>
    );
};

export default FormCreateGood;
