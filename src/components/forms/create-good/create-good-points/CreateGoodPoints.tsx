import React, { useEffect, useState } from 'react';
import './create-good-points.scss';
import { useFormContext, Controller } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { getPointIssues } from '../../../../store/reducers/shelter/ShelterCreator';
import classNames from 'classnames';

interface DeliveryPoint {
    city: string;
    address: string;
    shopName?: string;
    notes?: string;
}

const CreateGoodPoints = () => {
    const { handleSubmit } = useFormContext();
    const { deliveryPoints } = useAppSelector((state) => state.shelterReducer.shelter);
    const dispatch = useAppDispatch();
    const [checkedBoxes, setCheckedBoxes] = useState<boolean[]>(new Array(deliveryPoints.length).fill(false));

    useEffect(() => {
        dispatch(getPointIssues());
    }, [dispatch]);

    const onSubmit = () => {};

    const handleCheckboxChange = (index: number) => (checked: boolean) => {
        const newCheckedBoxes = [...checkedBoxes];
        newCheckedBoxes[index] = checked;
        setCheckedBoxes(newCheckedBoxes);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="points">
            <h3 className="subtitle subtitle_add">Пункты выдачи товара</h3>
            <p className="add-description dimensions__add">
                Выберите все пункты выдачи, в которых покупатель или курьер сможет забрать данный товар
            </p>
            {deliveryPoints.map((point: DeliveryPoint, index: number) => (
                <div key={index} className="delivery-point">
                    <Controller
                        name={`checkbox-${index}`}
                        defaultValue={false}
                        rules={{ required: true }}
                        render={({ field }) => (
                            <input
                                id={`checkbox-${index}`}
                                className="delivery-point__checkbox"
                                type="checkbox"
                                onChange={(e) => {
                                    field.onChange(e.target.checked);
                                    handleCheckboxChange(index)(e.target.checked);
                                }}
                                checked={field.value}
                            />
                        )}
                    />
                    <label
                        className={classNames('delivery-point__inf', {
                            'delivery-point__inf_selected': checkedBoxes[index],
                        })}
                        htmlFor={`checkbox-${index}`}
                    >
                        <p>{point.city}</p>
                        <p>{point.address}</p>
                        {point.shopName && <p>{point.shopName}</p>}
                        {point.notes && <p>{point.notes}</p>}
                    </label>
                </div>
            ))}
        </form>
    );
};

export default CreateGoodPoints;
