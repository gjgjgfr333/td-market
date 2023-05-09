import React, {useEffect} from 'react';
import './create-good-points.scss'
import {useForm} from "react-hook-form";
import {useAppDispatch, useAppSelector} from "../../../../hooks/redux";
import {getPointIssues} from "../../../../store/reducers/shelter/ShelterCreator";

const CreateGoodPoints = () => {
    const dispatch = useAppDispatch()
    const {deliveryPoints} = useAppSelector(state => state.shelterReducer.shelter)

    useEffect(() => {
        dispatch(getPointIssues())
    }, [dispatch])

    useEffect(() => {
        console.log('deliveryPoints', deliveryPoints)
    }, [deliveryPoints])

    const {handleSubmit} = useForm()

    const onSubmit = () => {

    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={'points'}>
            <h3 className={'subtitle subtitle_add'}>
                Пункты выдачи товара
            </h3>
            <p className={'add-description dimensions__add'}>
                Выберите все пункты выдачи, в которых покупатель или курьер сможет забрать данный товар
            </p>
        </form>
    )
};

export default CreateGoodPoints;