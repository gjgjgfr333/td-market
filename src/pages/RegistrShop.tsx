import React from 'react';
import HeaderRegData from "../components/headers/header-reg-data/HeaderRegData";
import BoxRegistrationShelter from "../components/boxes/box-reg-shelter/BoxRegistrationShelter";
import FormRegistrationShop from "../components/forms/registration-shop/FormRegistrationShop";

const RegistrShop = () => {
    return (
        <div>
            <HeaderRegData/>
            <BoxRegistrationShelter isImage={false}>
                <FormRegistrationShop/>
            </BoxRegistrationShelter>
        </div>
    );
};

export default RegistrShop;