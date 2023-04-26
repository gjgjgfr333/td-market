import React from 'react';
import {useForm} from "react-hook-form";

const CreateGoodAdditional = () => {
    const {register, handleSubmit} = useForm()



    const onSubmit = () => {

    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={'description'}>
            <h3 className={'subtitle'}>
                Дополнительная информация
            </h3>
            <div className={'description__block'}>
                <label className={'label'} htmlFor="material">Материал, состав ткани</label>
                <input
                    id={'material'}
                    className={'modalInput description__input'}
                    {...register('material')}
                />
            </div>
            <div className={'description__block'}>
                <label className={'label'} htmlFor="recommendations">Материал, состав ткани</label>
                <input
                    id={'recommendations'}
                    className={'modalInput description__input'}
                    {...register('recommendations')}
                />
            </div>
        </form>
    );
};

export default CreateGoodAdditional;
