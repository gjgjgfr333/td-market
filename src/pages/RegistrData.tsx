import React from 'react';
import HeaderRegData from "../components/headers/header-reg-data/HeaderRegData";
import BoxShelter from "../components/boxes/box-shelter/BoxShelter";
import FormRegistrationData from "../components/forms/registation-data/FormRegistrationData";

const RegistrData = () => {
    return (
        <div>
            <HeaderRegData/>
            <BoxShelter isImage={false}>
                <FormRegistrationData/>
            </BoxShelter>
        </div>
    );
};

export default RegistrData;