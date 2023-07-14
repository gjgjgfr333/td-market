import React, {ChangeEvent, Dispatch, SetStateAction, useEffect} from 'react';
import './create-good-quantity.scss'
import {IType} from "../../../../models/IProductCard";

interface Props {
    sizes: string[],
    setInputValues: Dispatch<SetStateAction<IType[]>>;
    cardQuantity: IType[] | null
}

const CreateGoodQuantity = ({sizes, setInputValues, cardQuantity}: Props) => {

    const handleChange = (event: ChangeEvent<HTMLInputElement>, index: number) => {
        const newValue = event.target.value;
        setInputValues((prevInputValues) => {
            const updatedValues = [...prevInputValues];
            updatedValues[index] = { size: sizes[index], quantity: newValue };
            return updatedValues;
        });
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        const charCode = event.which ? event.which : event.keyCode;
        if (charCode < 48 || charCode > 57) {
            event.preventDefault();
        }
    }

    useEffect(() => {
        console.log('sizes', sizes)
    }, [sizes])

    return (
        <div>
            <h3 className="subtitle">
                Наличие товара на складе
            </h3>
            <div className={'quantities'}>
                {sizes.map((item, index) => (
                    <div key={index} className={'quantity'}>
                        <div className={'quantities__size'}>Размер: <b>{item}</b></div>
                        <div>
                            <label htmlFor={`input-${index}`} className={'label'}>
                                Количество на складе (единиц в наличии)
                            </label>
                            <input
                                pattern="[0-9]*"
                                className={'modalInput'}
                                id={`input-${index}`}
                                type="text"
                                defaultValue={cardQuantity ? cardQuantity[index].quantity : ''}
                                onChange={(event) => handleChange(event, index)}
                                onKeyPress={handleKeyPress}
                            />
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default CreateGoodQuantity;