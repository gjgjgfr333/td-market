import React from 'react';
import './create-good-description.scss'
import '../../../../styles/elements/inputs.scss'
import {useForm} from "react-hook-form";
import {SimpleMdeReact} from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const CreateGoodDescription = () => {
    const {register, handleSubmit} = useForm();

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

    const onSubmit = (data: any) => {
        console.log('data', data);
    };

    const handleChange = (value: string) => {
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
                    onInput={handleSubmit(onSubmit)}
                />
            </div>
            <div>
                <label className="label" htmlFor="good-description">Описание</label>
                <SimpleMdeReact
                    className="mde"
                    placeholder="Добавьте описание вашему товару"
                    options={mdeReactOptions}
                    {...register('description')}
                    onChange={handleChange}
                />
            </div>
        </form>
    );
};

export default CreateGoodDescription;
