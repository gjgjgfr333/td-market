import React from 'react';

const TitleCards = ({text}: {text: string}) => {
    return (
        <h2>
            {text}
            <img src='/images/svg/arrow-right.svg' alt=""/>
        </h2>
    );
};

export default TitleCards;