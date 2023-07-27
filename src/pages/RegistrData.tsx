import React, {useEffect} from 'react';
import HeaderRegData from "../components/headers/header-reg-data/HeaderRegData";
import BoxShelter from "../components/boxes/box-shelter/BoxShelter";
import FormRegistrationData from "../components/forms/registation-data/FormRegistrationData";
import {useLocation} from "react-router-dom";

const RegistrData = () => {
    const location = useLocation();

    useEffect(() => {
        console.log('location.state', location.state)
    }, location.state)

    return (
        <div>
            <HeaderRegData/>
            <BoxShelter isImage={false}>
                <FormRegistrationData shelterReq={location.state}/>
            </BoxShelter>
        </div>
    );
};

export default RegistrData;
