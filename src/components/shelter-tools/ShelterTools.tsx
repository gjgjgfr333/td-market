import React, {useState} from 'react';
import './shelter-tools.scss'
import {Link} from "react-router-dom";
import {useAppSelector} from "../../hooks/redux";
import Cover from "../cover/Cover";

const ShelterTools = () => {
    const {shelter} = useAppSelector(state => state.shelterReducer)
    const [isActive, setIsActive] = useState(false)
    const [isCover, setIsCover] = useState(false)

    const onMouseLeave = () => {
        if (!isCover) setIsActive(false)
    }

    const onClose = () => {
        setIsActive(false)
        setIsCover(false)
    }

    const onClickNotifications = () => {
        setIsCover(true)
    }

    return (
        <>
            <div className={`shelter-tools ${isActive && 'active-tools'} ${isCover && 'notifications'}`} onMouseLeave={onMouseLeave}>
                <div className={'shelter-tools__header'}>
                    {
                        isCover &&
                        <div className={'notifications__header'}>
                            <img src="/images/svg/close.svg" alt="Закрыть уведомления" onClick={onClose}/>
                            <div className={'shelter-link'} onClick={onClickNotifications}>
                                <img src="/images/svg/bell.svg" alt="Уведомления"/>
                                <span>Уведомления</span>
                            </div>
                        </div>
                    }
                    <div className={'shelter-tools__name'}>
                        <p className={'name-market'}>
                            {shelter?.shop?.nameMarket}
                        </p>
                        <p className={'isIndividual-name'}>
                            {(shelter?.shelterData?.entity.isIndividual ? 'ИП ' : 'Ю.л ') + shelter.name}
                        </p>
                    </div>
                    <div className={'shelter-icon'} onMouseEnter={() => setIsActive(true)}>
                        <img src={shelter?.imageShop} alt="Иконка продавца"/>
                    </div>
                </div>
                {!isCover && <div className={'shelter-tools__buttons'}>
                    <div className={'shelter-link'} onClick={onClickNotifications}>
                        <img src="/images/svg/bell.svg" alt="Уведомления"/>
                        <span>Уведомления</span>
                    </div>
                    <Link className={'shelter-link'} to={'/'}>
                        <img src="/images/svg/personal-data.svg" alt="Личные данные"/>
                        <span>Личные данные</span>
                    </Link>
                    <Link className={'shelter-link'} to={'/'}>
                        <img src="/images/svg/shop-data.svg" alt="Данные магазина"/>
                        <span>Данные магазина</span>
                    </Link>
                    <Link className={'shelter-link'} to={'/'}>
                        <img src="/images/svg/key.svg" alt="Смена пароля"/>
                        <span>Смена пароля</span>
                    </Link>
                    <Link className={'shelter-link'} to={'/'}>
                        <img src="/images/svg/logout.svg" alt="Выйти"/>
                        <span>Выйти</span>
                    </Link>
                </div>}
                {isCover &&
                    <div className={'notifications__tabs'}>
                        <div className={'notifications-item'}>
                            <span>
                                Уведомления от td-market
                            </span>
                        </div>
                        <div className={'notifications-item'}>
                            <span>
                                Общение с покупателем
                            </span>
                        </div>
                        <div className={'notifications-item'}>
                            <span>
                                Общение с тех.поддержкой
                            </span>
                        </div>
                    </div>
                }
            </div>
            {isCover && <Cover callback={() => setIsCover(false)}/>}

        </>
    );
};

export default ShelterTools;
