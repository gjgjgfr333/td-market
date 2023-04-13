import React, {ReactNode} from 'react';
import BoxRegistrationShelter from '../components/boxes/box-reg-shelter/BoxRegistrationShelter';
import HeaderShelter from "../components/headers/header-shelter/HeaderShelter";
import {Outlet} from "react-router-dom";

const Shelter = () => {
    return (
        <main>
            <HeaderShelter/>
            <BoxRegistrationShelter isImage={false}>
                <Outlet/>
            </BoxRegistrationShelter>
        </main>
    );
};

export default Shelter;
