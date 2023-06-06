import {IDeliveryPoint2} from "../IDeliveryPoint";

export interface IShelter {
    id?: string,
    password?: string,
    email: string,
    name: string,
    phone: string,
    shelterData: {
        personalData: IPersonalData,
        closePerson: IClosePerson,
        entity: IEntity
    },
    shop: IShelterShop,
    deliveryPoints: IDeliveryPoint2[],
    isVerified: boolean
}

export interface IMainShelter {
    email: string,
    name: string,
    phone: string,
    password: string
}

export interface IPersonalData {
    name: string,
    family: string,
    patronymic: string,
    birthday: string
}

export interface IClosePerson {
    name: string,
    family: string,
    patronymic: string,
    phone: string
}

export interface IEntity {
    isIndividual: boolean,
    code: string,
    // photo: File,
    bic: string,
    check: string
}

export interface IShelterShop {
    nameMarket: string,
    description: string,
}
