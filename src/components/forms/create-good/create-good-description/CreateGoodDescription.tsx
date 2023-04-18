import React from 'react';
import './create-good-description.scss'
import '../../../../styles/elements/inputs.scss'
import {useForm} from "react-hook-form";
import ReactMarkdown from "react-markdown";

const CreateGoodDescription = () => {
    const {register, handleSubmit} = useForm()

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
                <ReactMarkdown>
                    # Hello, *world*!
                </ReactMarkdown>
            </div>
        </form>
    );
};

export default CreateGoodDescription;
