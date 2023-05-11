import React from 'react';
import './create-good-description.scss'
import '../../../../styles/elements/inputs.scss'
import {SubmitHandler, useForm} from "react-hook-form";
import {SimpleMdeReact} from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import {ICategory, ISections, ISubcategories} from "../../../../models/ICategories";

type IDescriptionGood = {
    name: string,
    description: string
}

interface IProps {
    descriptionGood: IDescriptionGood;
    setDescriptionGood: (description: IDescriptionGood) => void;
}

const CreateGoodDescription = ({descriptionGood, setDescriptionGood}: IProps) => {
    const {register, handleSubmit} = useForm<IDescriptionGood>();

    const mdeReactOptions = {
        autosave: {
            enabled: true,
            uniqueId: "create-good",
            delay: 1000,
        },
        lineNumbers: false,
        maxHeight: '281px',
        spellChecker: false,
        status: false,
    };

    const onSubmit: SubmitHandler<IDescriptionGood> = (data) => {
        console.log('data', data)
        setDescriptionGood(data)
    };

    const handleChangeInput = (value: string) => {
        handleSubmit((data: any) => {
            onSubmit({ ...data, name: value })
        })();
    };

    const handleChangeMde = (value: string) => {
        handleSubmit((data: any) => {
            onSubmit({ ...data, description: value })
        })();
    };


    return (
        <form onSubmit={handleSubmit(onSubmit)} className="description">
            <div className="description__block">
                <label className="label" htmlFor="name">Название</label>
                <input
                    id="name"
                    placeholder="Введите название товара"
                    className="modalInput description__input"
                    {...register('name')}
                    onChange={(e) => handleChangeInput(e.target.value)}
                />
            </div>
            <div>
                <label className="label" htmlFor="good-description">Описание</label>
                <SimpleMdeReact
                    className="mde"
                    placeholder="Добавьте описание вашему товару"
                    options={mdeReactOptions}
                    {...register('description')}
                    onChange={handleChangeMde}
                />
            </div>
        </form>
    );
};

export default CreateGoodDescription;
