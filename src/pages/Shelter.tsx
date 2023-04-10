import React from 'react';
import BoxRegistrationShelter from '../components/boxes/box-reg-shelter/BoxRegistrationShelter';
import HeaderShelter from "../components/headers/header-shelter/HeaderShelter";

const Shelter = () => {
    return (
        <main>
            <HeaderShelter/>
            <BoxRegistrationShelter isImage={false}>
                <div></div>
            </BoxRegistrationShelter>
        </main>
    );
};

export default Shelter;