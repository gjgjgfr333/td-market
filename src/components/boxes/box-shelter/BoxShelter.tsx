import React, {ReactNode} from 'react';
import './box-shelter.scss'
import '../../../styles/elements/inputs.scss'
import Container from "../../container/Container";
import ButtonBack from "../../buttons/button-back/ButtonBack";

interface IBoxRegistrationShelter {
    children: ReactNode,
    isImage?: boolean
}

const BoxShelter = ({children, isImage = true}: IBoxRegistrationShelter) => {
    return (
        <main className={'reg-main'}>
            <Container>
                <div className={'reg-main__back'}>
                    <ButtonBack/>
                </div>
                <div className={'reg-main__container'}>
                    {isImage && <img className={'reg-main__img'} src={'/images/registration-shelter.png'}
                          alt={'Регистрируйтесь и продавайте'}/>}
                    {children}
                </div>
            </Container>
        </main>
    );
};

export default BoxShelter;