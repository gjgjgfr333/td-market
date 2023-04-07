import React from 'react';
import Container from "../../container/Container";
import '../header-req-shelter/header-reg-shelter.scss'
import './header-reg-data.scss'
import {useAppDispatch} from "../../../hooks/redux";
import {shelterSlice} from "../../../store/reducers/shelter/ShelterSlice";

const HeaderRegData = () => {
    const dispatch = useAppDispatch()
    const {setIsRegistry} = shelterSlice.actions

    const onSaveShelter = () => {
        dispatch(setIsRegistry())
    }

    return (
        <header className={'header-reg'}>
            <Container>
                <div className={'header-reg-_data'}>
                    <h2>Личные данные</h2>
                    <button className={'button button_light header-reg__button'} onClick={onSaveShelter}>
                        СОХРАНИТЬ
                    </button>
                </div>
            </Container>
        </header>
    );
};

export default HeaderRegData;