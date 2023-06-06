import React from 'react';
import './box-shelter-main.scss'
import {useAppSelector} from "../../../hooks/redux";

const BoxShelterMain = () => {
    const {shelter} = useAppSelector(state => state.shelterReducer)

    return (
        <div>
            {!shelter.isVerified && (
                <div className={'shelter-warning'}>
                    В данный момент ваши документы проходят проверку, она продлится не более 30 минут. После ее успешного окончания вы сможете начать торговать. Пока что можете подготовить свой товар к продаже во вкладке "Мои товары".
                </div>
                )
            }

        </div>
    );
};

export default BoxShelterMain;
