import React, {useMemo, useState} from 'react';
import GeolocationSvg from "../svg/GeolocationSvg";
import './geolocation.scss'
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {locationSlice} from "../../store/reducers/LocationSlice";

const Geolocation = () => {
    const {cities, city} = useAppSelector(state => state.locationReducer)
    const {changeCity} = locationSlice.actions
    const dispatch = useAppDispatch()


    const onSelectCity = (index: number): void => {
        dispatch(changeCity(cities[index]))
    }

    return (
        <div className={'geolocation'}>
            <GeolocationSvg/>
            <div>
                {city}
            </div>
            <div className="geolocation__select">
                <h3 className="geolocation__title">Выберите город доставки</h3>
                {cities.map((city, index) => (
                    <div onClick={() => onSelectCity(index)}>{city}</div>
                ))}
            </div>
        </div>
    );
};

export default Geolocation;