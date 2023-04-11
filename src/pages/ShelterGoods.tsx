import React from 'react';
import HeaderShelter from "../components/headers/header-shelter/HeaderShelter";
import BoxRegistrationShelter from "../components/boxes/box-reg-shelter/BoxRegistrationShelter";
import BoxShelterGoods from "../components/boxes/box-shelter-goods/BoxShelterGoods";

const ShelterGoods = () => {
    console.log('hey bro')
    return (
        <main>
            <HeaderShelter/>
            <BoxRegistrationShelter isImage={false}>
                <BoxShelterGoods/>
            </BoxRegistrationShelter>
        </main>
    );
};

export default ShelterGoods;