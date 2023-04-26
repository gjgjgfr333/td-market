import React from 'react';
import './create-good-points.scss'
import {useForm} from "react-hook-form";

const CreateGoodPoints = () => {
    const {handleSubmit} = useForm()

    const onSubmit = () => {

    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={'points'}>
            <h3 className={'subtitle subtitle_add'}>
                Пункты выдачи товара
            </h3>
            <p className={'add-description dimensions__add'}>
                Выберите все пункты выдачи, в которых покупатель или курьер сможет забрать данный товар
            </p>
        </form>
    )
};

export default CreateGoodPoints;