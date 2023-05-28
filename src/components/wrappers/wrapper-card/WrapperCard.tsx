import React from 'react';
import './wrapper-card.scss'
import '../../../styles/elements/buttons.scss'
import {IChildren} from "../../../models/IChildren";

const WrapperCard = ({ children }: IChildren) => {
    if (Array.isArray(children) && children.length > 12) {
        return (
            <div className={'wrapper'}>
                <div className={'wrapper-card'}>
                    {children}
                </div>
                <button className={'button button_light button__add-card'}>
                    Показать ещё
                </button>
            </div>
        );
    } else {
        return (
            <div className={'wrapper'}>
                <div className={'wrapper-card'}>
                    {children}
                </div>
            </div>
        );
    }
};

export default WrapperCard;