import React, {ReactNode} from 'react';
import './box-registration-shelter.scss'
import '../../../styles/elements/inputs.scss'
import Container from "../../container/Container";

interface IBoxRegistrationShelter {
    children: ReactNode,
    isImage?: boolean
}

const BoxRegistrationShelter = ({children, isImage = true}: IBoxRegistrationShelter) => {
    return (
        <main className={'reg-main'}>
            <Container>
                <div className={'reg-main__container'}>
                    {isImage && <img className={'reg-main__img'} src={'/images/registration-shelter.png'}
                          alt={'Регистрируйтесь и продавайте'}/>}
                    {children}
                </div>
            </Container>
        </main>
    );
};

export default BoxRegistrationShelter;