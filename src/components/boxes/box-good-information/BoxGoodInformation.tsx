import React, {useState} from 'react';
import ReactMarkdown from 'react-markdown'
import './box-good-information.scss'
import {IProductCard} from "../../../models/IProductCard";

const BoxGoodInformation = ({card} : {card: IProductCard}) => {

    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index: number) => {
        setActiveTab(index);
    };

    return (
        <div className={'good-additional'}>
            <div className={'good-tabs'}>
                <h4
                    className={`good-tabs__item ${activeTab === 0 && 'active'}`}
                    onClick={() => handleTabClick(0)}
                >
                    Описание
                </h4>
                <h4
                    className={`good-tabs__item ${activeTab === 1 && 'active'}`}
                    onClick={() => handleTabClick(1)}
                >
                    Характеристики
                </h4>
                <h4
                    className={`good-tabs__item not-mobile ${activeTab === 2 && 'active'}`}
                    onClick={() => handleTabClick(2)}
                >
                    Отзывы
                </h4>
                <h4
                    className={`good-tabs__item not-mobile ${activeTab === 3 && 'active'}`}
                    onClick={() => handleTabClick(3)}
                >
                    Описание
                </h4>
            </div>
            {activeTab === 0 &&
                <div className={'good-additional__information'}>
                    <ReactMarkdown children={card.information.description}/>,
                </div>
            }
        </div>
    );
};

export default BoxGoodInformation;
