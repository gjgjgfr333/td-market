import React, {useState} from 'react';
import './shelter-tools.scss'
import {Link, useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import Cover from "../cover/Cover";
import NotificationSvg from "../svg/NotificationSvg";
import TechnicalSupportSvg from "../svg/TechnicalSupportSvg";
import CommunicationSvg from "../svg/CommunicationSvg";
import {shelterSlice} from "../../store/reducers/shelter/ShelterSlice";
import {API_URL} from "../../http";

const ShelterTools = () => {
    const navigation = useNavigate()
    const dispatch = useAppDispatch()
    const {shelter, isHoverTools} = useAppSelector(state => state.shelterReducer)
    const [isCover, setIsCover] = useState(false)
    const [activeNotification, setActiveNotification] = useState(0)

    const onMouseLeave = () => {
        if (!isCover) dispatch(shelterSlice.actions.setIsHoverTools(false))
    }

    const onClose = () => {
        dispatch(shelterSlice.actions.setIsHoverTools(false))
        setIsCover(false)
    }

    const onClickNotifications = () => {
        setIsCover(true)
    }

    const onLogout = () => {
        dispatch(shelterSlice.actions.removeAccessToken())
        navigation('/')
    }

    return (
        <>
            <div className={`shelter-tools ${isHoverTools && 'active-tools'} ${isCover && 'notifications'}`} onMouseLeave={onMouseLeave}>
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
                            {(shelter?.shelterData?.entity.isIndividual ? 'ИП ' : 'Ю.л ') + shelter?.name}
                        </p>
                    </div>
                    <div
                        className={'shelter-icon'}
                        onMouseEnter={() => dispatch(shelterSlice.actions.setIsHoverTools(true))}
                    >
                        <img src={`${API_URL}${shelter?.imageShop}`} alt="Иконка продавца"/>
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
                    <div className={'shelter-link'} onClick={onLogout}>
                        <img src="/images/svg/logout.svg" alt="Выйти"/>
                        <span>Выйти</span>
                    </div>
                </div>}
                {isCover &&
                    <div className={'notifications__tabs'}>
                        <div
                            className={`notifications-item ${activeNotification === 0 && 'active'}`}
                            onClick={() => setActiveNotification(0)}
                        >
                            <div>
                                <NotificationSvg/>
                            </div>
                            <span className={'notifications-item__text'}>
                                Уведомления<br/>от td-market
                            </span>
                        </div>
                        <div
                            className={`notifications-item ${activeNotification === 1 && 'active'}`}
                            onClick={() => setActiveNotification(1)}
                        >
                            <div>
                                <TechnicalSupportSvg/>
                            </div>
                            <span className={'notifications-item__text'}>
                                Общение<br/>с покупателем
                            </span>
                        </div>
                        <div
                            className={`notifications-item ${activeNotification === 2 && 'active'}`}
                            onClick={() => setActiveNotification(2)}
                        >
                            <div>
                                <CommunicationSvg/>
                            </div>
                            <span className={'notifications-item__text'}>
                                Общение<br/>с тех.поддержкой
                            </span>
                        </div>
                    </div>
                }
            </div>
            {isCover && <Cover callback={onClose}/>}

        </>
    );
};

export default ShelterTools;
