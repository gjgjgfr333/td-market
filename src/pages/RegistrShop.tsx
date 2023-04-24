import React from 'react';
import HeaderRegData from "../components/headers/header-reg-data/HeaderRegData";
import BoxShelter from "../components/boxes/box-shelter/BoxShelter";
import FormRegistrationShop from "../components/forms/registration-shop/FormRegistrationShop";

const RegistrShop = () => {
    return (
        <div>
            <HeaderRegData/>
            <BoxShelter isImage={false}>
                <FormRegistrationShop/>
            </BoxShelter>
        </div>
    );
};

export default RegistrShop;