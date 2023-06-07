import React from 'react';
import './box-shelter-main.scss'
import {useAppSelector} from "../../../hooks/redux";

const BoxShelterMain = () => {
    const {shelter} = useAppSelector(state => state.shelterReducer)

    return (
        <div>
            {!shelter.isVerified && (
                <div className={'shelter-warning'}>
                    В данный момент ваши документы проходят проверку, она продлится не более 30 минут. После ее успешного окончания вы сможете начать торговать. Пока что можете подготовить свой товар к продаже во вкладке "Мои товары".
                </div>
                )
            }
            <div className={'shelter__left'}>
                <div className={'shelter__information'}>
                    <h3 className={'shelter__subtitle'}>Добро пожаловать !</h3>
                    <div className={'rate'}>
                        <div className={'rate__header'}>
                            <div className={'rate__icon'}>
                                <img src={shelter.imageShop} alt="Иконка продавца"/>
                            </div>
                            <div className={'rate__name'}>
                                <p className={'name-market'}>
                                    {shelter.shop?.nameMarket}
                                </p>
                                <p className={'isIndividual-name'}>
                                    {shelter.name}
                                </p>
                            </div>
                        </div>
                        <p>Ваш тарифный план: базовый</p>
                        <p>Окончание платной подписки: 30 июля</p>
                        <button>ПРОДЛИТЬ ПОДПИСКУ</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BoxShelterMain;
