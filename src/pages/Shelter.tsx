import React from 'react';
import BoxShelter from '../components/boxes/box-shelter/BoxShelter';
import HeaderShelter from "../components/headers/header-shelter/HeaderShelter";
import {Outlet} from "react-router-dom";

const Shelter = () => {

    return (
        <main>
            <HeaderShelter/>
            <BoxShelter isImage={false}>
                <Outlet/>
            </BoxShelter>
        </main>
    );
};

export default Shelter;
