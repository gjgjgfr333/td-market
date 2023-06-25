import React, { useEffect, useState } from 'react';
import './create-good-points.scss';
import { Controller } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { getPointIssues } from '../../../../store/reducers/shelter/ShelterCreator';
import classNames from 'classnames';

interface DeliveryPoint {
    city: string;
    address: string;
    shopName?: string;
    notes?: string;
    _id: string
}

const CreateGoodPoints = () => {
    // const { handleSubmit } = useFormContext();
    const { deliveryPoints } = useAppSelector((state) => state.shelterReducer.shelter);
    const dispatch = useAppDispatch();
    const [checkedBoxes, setCheckedBoxes] = useState<boolean[]>([]);

    useEffect(() => {
        dispatch(getPointIssues());
    }, [dispatch]);

    useEffect(() => {
        if (deliveryPoints && deliveryPoints.length > 0) {
            setCheckedBoxes(new Array(deliveryPoints.length).fill(false))
        }
    }, [deliveryPoints])

    const handleCheckboxChange = (index: number) => (checked: boolean) => {
        const newCheckedBoxes = [...checkedBoxes];
        newCheckedBoxes[index] = checked;
        setCheckedBoxes(newCheckedBoxes);
    };



    return (
        <div className="points">
            <h3 className="subtitle subtitle_add">Пункты выдачи товара</h3>
            <p className="add-description dimensions__add">
                Выберите все пункты выдачи, в которых покупатель или курьер сможет забрать данный товар
            </p>
            {deliveryPoints && deliveryPoints.map((point: DeliveryPoint, index: number) => (
                <div key={index} className="delivery-point">
                    <Controller
                        name={`checkbox-${point._id}`}
                        defaultValue={false}
                        render={({ field }) => (
                            <input
                                id={`${point._id}`}
                                className="create-good__checkbox"
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
                        htmlFor={`checkbox-${point._id}`}
                    >
                        <p>{point.city}</p>
                        <p>{point.address}</p>
                        {point.shopName && <p>{point.shopName}</p>}
                        {point.notes && <p>{point.notes}</p>}
                    </label>
                </div>
            ))}
        </div>
    );
};

export default CreateGoodPoints;
