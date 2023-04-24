import React from 'react';
import '../styles/elements/buttons.scss'
import HeaderRegShelter from "../components/headers/header-req-shelter/HeaderRegShelter";
import BoxShelter from "../components/boxes/box-shelter/BoxShelter";
import FormRegistration from "../components/forms/registration-shelter/FormRegistration";

const RegistrShelter = () => {
    return (
        <div>
            <HeaderRegShelter/>
            <BoxShelter isRegistry={true}>
                <FormRegistration/>
            </BoxShelter>
        </div>

    );
};

export default RegistrShelter;