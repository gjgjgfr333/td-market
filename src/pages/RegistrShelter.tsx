import React from 'react';
import '../styles/elements/buttons.scss'
import HeaderRegShelter from "../components/headers/header-req-shelter/HeaderRegShelter";
import BoxRegistrationShelter from "../components/boxes/box-reg-shelter/BoxRegistrationShelter";

const RegistrShelter = () => {
    return (
        <div>
            <HeaderRegShelter/>
            <BoxRegistrationShelter/>
        </div>

    );
};

export default RegistrShelter;