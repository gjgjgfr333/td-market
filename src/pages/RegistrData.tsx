import React from 'react';
import HeaderRegData from "../components/headers/header-reg-data/HeaderRegData";
import BoxRegistrationShelter from "../components/boxes/box-reg-shelter/BoxRegistrationShelter";
import FormRegistrationData from "../components/forms/registation-data/FormRegistrationData";

const RegistrData = () => {
    return (
        <div>
            <HeaderRegData/>
            <BoxRegistrationShelter isImage={false}>
                <FormRegistrationData/>
            </BoxRegistrationShelter>
        </div>
    );
};

export default RegistrData;