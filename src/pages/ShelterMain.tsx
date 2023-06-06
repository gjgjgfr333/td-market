import React, {useEffect} from 'react';
import BoxShelterMain from "../components/boxes/box-shelter-main/BoxShelterMain";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {getShelter} from "../store/reducers/shelter/ShelterCreator";
import {isObjectEmpty} from "../utils/isObjectEmpty";

const ShelterMain = () => {
    const dispatch = useAppDispatch()
    const {shelter} = useAppSelector(state => state.shelterReducer)

    useEffect(() => {
        console.log('shelter', shelter)
    }, [shelter])

    useEffect(() => {
        if ((localStorage.getItem('access_token_shelter') !== null) && isObjectEmpty(shelter)) {
            dispatch(getShelter())
        }
    }, [dispatch, shelter])

    return (
        <div>
            <BoxShelterMain/>
        </div>
    );
};

export default ShelterMain;
