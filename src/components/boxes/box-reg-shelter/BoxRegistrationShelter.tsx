import React from 'react';
import './box-registration-shelter.scss'
import '../../../styles/elements/inputs.scss'
import Container from "../../container/Container";
import {IChildren} from "../../../models/IChildren";

const BoxRegistrationShelter = ({children}: IChildren) => {
    return (
        <main className={'reg-main'}>
            <Container>
                <div className={'reg-main__container'}>
                    <img className={'reg-main__img'} src={'/images/registration-shelter.png'} alt={'Регистрируйтесь и продавайте'}/>
                    {children}
                </div>
            </Container>
        </main>
    );
};

export default BoxRegistrationShelter;