import React from 'react';
import './form-create-good.scss'
import '../../../styles/elements/selects.scss'
import CreateGoodSelects from "./create-good-selects/CreateGoodSelects";
import CreateGoodDescription from "./create-good-description/CreateGoodDescription";
import CreateGoodPhotos from "./create-good-photos/CreateGoodPhotos";
import CreateGoodAdditional from "./create-good-additional/CreateGoodAdditional";
import CreateGoodPrice from "./create-good-price/CreateGoodPrice";
import CreateGoodDimensions from "./create-good-dimensions/CreateGoodDimensions";
import CreateGoodPoints from "./create-good-points/CreateGoodPoints";

const FormCreateGood = () => {

    return (
        <div className={'create'}>
            <h3 className={'create__title'}>Создание карточки товара</h3>
            <CreateGoodSelects/>
            <hr className={'create__divider'}/>
            <CreateGoodDescription/>
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
        </div>
    );
};

export default FormCreateGood;
