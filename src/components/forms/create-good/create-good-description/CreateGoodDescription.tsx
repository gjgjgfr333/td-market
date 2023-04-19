import React, {useMemo} from 'react';
import './create-good-description.scss'
import '../../../../styles/elements/inputs.scss'
import {useForm} from "react-hook-form";
import {SimpleMdeReact} from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const CreateGoodDescription = () => {
    const {register, handleSubmit} = useForm()

    const mdeReactOptions = useMemo(() => {
        return {
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
    }, []);

    const onSubmit = () => {

    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={'description'}>
            <div className={'description__block'}>
                <label className={'label'} htmlFor="name">Название</label>
                <input
                    id={'name'}
                    placeholder={'Введите название товара'}
                    className={'modalInput description__input'}
                    {...register('Название')}
                />
            </div>
            <div>
                <label className={'label'} htmlFor="">Описание</label>
                <SimpleMdeReact
                    className={'mde'}
                    placeholder={'Добавьте описание вашему товару'}
                    options={mdeReactOptions}
                />
            </div>
        </form>
    );
};

export default CreateGoodDescription;
