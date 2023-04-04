import React from 'react';
import HeaderLogShelter from "../components/headers/header-log-shelter/HeaderLogShelter";
import BoxRegistrationShelter from "../components/boxes/box-reg-shelter/BoxRegistrationShelter";
import FormLogin from "../components/forms/login-shelter/FormLogin";

const LoginShelter = () => {
    return (
        <div>
            <HeaderLogShelter/>
            <BoxRegistrationShelter>
                <FormLogin/>
            </BoxRegistrationShelter>
        </div>
    );
};

export default LoginShelter;