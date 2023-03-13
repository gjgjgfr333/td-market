import React from 'react';
import './title-cards.scss'

const TitleCards = ({text}: {text: string}) => {
    return (
        <h2 className={'title'}>
            <span>{text}</span>
            <img src='/images/svg/arrow-right-fat.svg' alt=""/>
        </h2>
    );
};

export default TitleCards;