import React from 'react';
import '../styles/elements/buttons.scss'
import HeaderRegShelter from "../components/headers/header-req-shelter/HeaderRegShelter";
import BoxRegistrationShelter from "../components/boxes/box-reg-shelter/BoxRegistrationShelter";
import FormRegistration from "../components/forms/registration-shelter/FormRegistration";

const RegistrShelter = () => {
    return (
        <div>
            <HeaderRegShelter/>
            <BoxRegistrationShelter>
                <FormRegistration/>
            </BoxRegistrationShelter>
        </div>

    );
};

export default RegistrShelter;