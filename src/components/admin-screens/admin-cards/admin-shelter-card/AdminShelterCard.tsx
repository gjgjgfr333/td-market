import React from 'react';
import './admin-shelter-card.scss'
import {IShelterRes} from "../../../../models/response/IShelter";
import {API_URL} from "../../../../http";
import {AdminService} from "../../../../services/AdminService";

const AdminShelterCard = ({shelter, onDelete}: {shelter: IShelterRes, onDelete: (id: string) => void}) => {
    const onAgreement = async (id: string) => {
        const response = await AdminService.agreementShelter(id)
        if (response.data) {
            onDelete(id)
        }
        console.log('response', response)
    }

    return (
        <div className={'admin-shelter-card'}>
            <p>Продавец: {shelter?.name}</p>
            <p>Email: {shelter.email}</p>
            <p>Дата регистрации: {shelter.createdAt.toString()}</p>
            <p>Личные данные</p>
            <div className={'admin-shelter-card__flex'}>
                <p>
                    Имя: {shelter.shelterData.personalData.name}
                </p>
                <p>
                    Фамилия: {shelter.shelterData.personalData.family}
                </p>
                <p>
                    Отчество: {shelter.shelterData.personalData.patronymic}
                </p>
                <p>
                    Дата рождения: {shelter.shelterData.personalData.birthday}
                </p>
                <p>
                    Номер телефона: {shelter.phone}
                </p>
            </div>
            <p>Данные близкого человека</p>
            <div className={'admin-shelter-card__flex'}>
                <p>
                    Имя: {shelter.shelterData.closePerson.name}
                </p>
                <p>
                    Фамилия: {shelter.shelterData.closePerson.family}
                </p>
                <p>
                    Отчество: {shelter.shelterData.closePerson.patronymic}
                </p>
                <p>
                    Дата рождения: {shelter.shelterData.closePerson.patronymic}
                </p>
                <p>
                    Номер телефона: {shelter.shelterData.closePerson.phoneClose}
                </p>
            </div>
            <p>Юридические данные</p>
            <p>{shelter.shelterData.entity.isIndividual ? 'Физ.лицо' : 'Юридическое лицо'}</p>
            <div className={'admin-shelter-card__flex'}>
                <p>
                    ИНН: {shelter.shelterData.entity?.code}
                </p>
                <p>
                    БИК банка: {shelter.shelterData.entity?.bic}
                </p>
                <p>
                    Номер расчетного счета: {shelter.shelterData.entity?.check}
                </p>
            </div>
            <p>Данные магазина</p>
            <p>Название магазина: {shelter.shop?.nameMarket}</p>
            <p>Описание магазина: {shelter.shop.description}</p>
            {shelter.deliveryPoints.length > 0 && <p>Пункты выдачи</p>}
            {shelter.deliveryPoints.map(point => (
                <div className={'admin-shelter-card__flex'}>
                    <p>Город, населенный пункт: {point?.city}</p>
                    <p>Адрес: {point?.address}</p>
                    {point?.shopName && point?.shopName?.length > 0 && <p>Название магазина, торгового центра, рынка: {point?.shopName}</p>}
                    {point?.notes && point?.notes?.length > 0 && <p>Примечания: {point?.notes}</p>}
                </div>
            ))}
            <p>Логотип магазина</p>
            <div className={'admin-shelter-card__footer'}>
                <div className={'admin-shelter-card__image'}>
                    <img src={API_URL + shelter.imageShop} alt="Изображения логотипа"/>
                </div>
                <div className={'admin-shelter-card__buttons'}>
                    <img src="/images/svg/admin/agreement.svg" alt="Принять" onClick={() => onAgreement(shelter._id)}/>
                    <img src="/images/svg/admin/refusal.svg" alt="Отклонить"/>
                </div>
            </div>
        </div>
    );
};

export default AdminShelterCard;