import React, {useCallback, useEffect, useMemo, useState} from 'react';
import './create-good-description.scss'
import '../../../../styles/elements/inputs.scss'
import {SimpleMdeReact} from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

type IDescriptionGood = {
    name: string,
    description: string
}

interface IProps {
    setDescriptionGood: (description: IDescriptionGood) => void;
}

const CreateGoodDescription = React.memo(({setDescriptionGood}: IProps) => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')


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
        }
    }, []) ;


    useEffect(() => {
        setDescriptionGood({
            name,
            description,
        })
    }, [setDescriptionGood, name, description])

    const handleChangeInput = (value: string) => {
        setName(value)
    };

    const handleChangeMde = useCallback((value: string) => {
        setDescription(value);
    }, []);

    return (
        <form className="description">
            <div className="description__block">
                <label className="label" htmlFor="name">Название</label>
                <input
                    id="name"
                    placeholder="Введите название товара"
                    className="modalInput description__input"
                    onChange={(e) => handleChangeInput(e.target.value)}
                />
            </div>
            <div>
                <label className="label" htmlFor="good-description">Описание</label>
                <SimpleMdeReact
                    className="mde"
                    placeholder="Добавьте описание вашему товару"
                    options={mdeReactOptions}
                    value={description}
                    onChange={handleChangeMde}
                />
            </div>
        </form>
    );
});

export default CreateGoodDescription;
