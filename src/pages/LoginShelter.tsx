import React from 'react';
import HeaderLogShelter from "../components/headers/header-log-shelter/HeaderLogShelter";
import BoxShelter from "../components/boxes/box-shelter/BoxShelter";
import FormLogin from "../components/forms/login-shelter/FormLogin";

const LoginShelter = () => {
    return (
        <div>
            <HeaderLogShelter/>
            <BoxShelter isRegistry={true}>
                <FormLogin/>
            </BoxShelter>
        </div>
    );
};

export default LoginShelter;