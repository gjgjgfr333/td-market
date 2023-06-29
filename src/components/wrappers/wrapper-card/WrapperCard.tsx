import React, {ReactNode} from 'react';
import './wrapper-card.scss'
import '../../../styles/elements/buttons.scss'

interface IWRapperCard {
    handleButtonClick?: () => void,
    cardsLength?: number,
    limit: number,
    children: ReactNode
}

const WrapperCard = ({ children, cardsLength, handleButtonClick, limit }: IWRapperCard) => {
        return (
            <div className={'wrapper'}>
                <div className={'wrapper__container'}>
                    <div className={'wrapper-card'}>
                        {children}
                    </div>
                </div>
                {cardsLength && cardsLength % limit === 0 &&
                    <button onClick={handleButtonClick} className={'button button_light button__add-card'}>
                    Показать ещё
                </button>}
            </div>
        );
};

export default WrapperCard;
