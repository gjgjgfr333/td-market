import React, {ChangeEvent, useEffect} from 'react';
import './create-good-sizes.scss'

interface IProps {
    options: string[];
    selectedOptions: string[]
    setSelectedOptions: (selectedOptions: string[]) => void;
}

const CreateGoodSizes = ({ options, selectedOptions, setSelectedOptions }: IProps) => {

    const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        const isChecked = event.target.checked;

        if (isChecked) {
            setSelectedOptions([...selectedOptions, value]);
        } else {
            setSelectedOptions(selectedOptions.filter((option) => option !== value));
        }
    };

    useEffect(() => {
        console.log('selectedOptions', selectedOptions)
    }, [selectedOptions])

    return (
        <div>
            <h3 className={'subtitle'}>
                Размер
            </h3>
            <div className={'checkboxes-size'}>
                {options.map((option) => (
                    <span className={'checkbox-wrapper'}>
                        <input
                            type="checkbox"
                            className={'create-good__checkbox'}
                            value={option}
                            checked={selectedOptions.includes(option)}
                            onChange={handleCheckboxChange}
                            id={option}
                        />
                        <label key={option} htmlFor={option} className={'checkbox-wrapper__label'}>
                            {option}
                        </label>
                    </span>

                ))}
            </div>
        </div>
    );
};

export default CreateGoodSizes;