import React, {useMemo, useState} from 'react';
import GeolocationSvg from "../svg/GeolocationSvg";
import './geolocation.scss'

const Geolocation = () => {
    const cities = useMemo(
        () =>['Тирасполь', 'Бендеры', 'Рыбница', 'Дубоссары', 'Слободзея', 'Григориополь', 'Каменка'],
        [])
    const [city, setCity] = useState('Тирасполь')

    const onSelectCity = (index: number): void => {
      setCity(cities[index])
    }

    return (
        <div className={'geolocation'}>
            <GeolocationSvg/>
            <div>
                {city}
            </div>
            <div className="geolocation__select">
                <h3>Выберите город доставки</h3>
                {cities.map((city, index) => (
                    <div onClick={() => onSelectCity(index)}>{city}</div>
                ))}
            </div>
        </div>
    );
};

export default Geolocation;