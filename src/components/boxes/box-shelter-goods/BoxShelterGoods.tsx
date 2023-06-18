import React, {useEffect, useState} from 'react';
import './box-shelter-goods.scss'
import '../../../styles/elements/buttons.scss'
import '../../../styles/elements/selects.scss'
import Select from "react-select";
import {useNavigate} from "react-router-dom";
import {IProductCard} from "../../../models/IProductCard";
import {ShelterService} from "../../../services/ShelterService";
import {useAppSelector} from "../../../hooks/redux";
import ShelterCard from "../../cards/shelter-card/ShelterCard";

const goodsOptions = [
    {
        value: 'все',
        label: 'все'
    },
    {
        value: 'в продаже',
        label: 'в продаже'
    },
    {
        value: 'нет в наличии',
        label: 'нет в наличии'
    },
    {
        value: 'отклонённые',
        label: 'отклонённые'
    },
    {
        value: 'в модерации',
        label: 'в модерации'
    },
]

const filterOptions = [
    {
        value: 'сначала с высоким рейнтингом',
        label: 'сначала с высоким рейнтингом'
    },
    {
        value: 'сначала с низким рейтингом',
        label: 'сначала с низким рейтингом'
    },
    {
        value: 'по дате: сначала старые',
        label: 'по дате: сначала старые'
    },
    {
        value: 'по дате: сначала новые',
        label: 'по дате: сначала новые'
    },
]

const BoxShelterGoods = () => {
    const navigate = useNavigate()
    const {isHoverTools} = useAppSelector(state => state.shelterReducer)
    const [cardsShelter, setCardsShelter] = useState<IProductCard[]>([]);

    const onCreateGood = (e: any) => {
        e.preventDefault()
        navigate('create')
    }

    // useEffect(() => {
    //     console.log('cardsShelter', cardsShelter)
    // }, [cardsShelter])

    useEffect(() => {
        const fetchShelterCards = async () => {
            try {
                const response = await ShelterService.getCardsOfShelter();
                setCardsShelter(response.data);
            } catch (error) {
                console.log('Ошибка при получении карточек товаров:', error);
            }
        };

        fetchShelterCards();
    }, [])

    return (
        <div className={'goods'}>
            <div className={'goods__selects'}>
                <div className={'select'}>
                    <span className={'select__label'}>Показать товары:</span>
                    <Select
                        options={goodsOptions}
                        defaultValue={goodsOptions[0]}
                        className={'select-input select-input_goods'}
                        classNamePrefix={'select'}
                    />
                </div>
                <div className={'select'}>
                    <span className={'select__label'}>Отсортировать:</span>
                    <Select
                        options={filterOptions}
                        defaultValue={filterOptions[0]}
                        className={'select-input select-input_filter'}
                        classNamePrefix={'select'}
                    />
                </div>
                <button
                    className={'button button_dark goods__button'}
                    onClick={onCreateGood}
                    style={{zIndex: isHoverTools ? 1 : 1111}}
                >
                    Добавить товар
                </button>
            </div>
            <div className={'goods-wrapper'}>
                {cardsShelter.map((card) => (
                    <ShelterCard card={card} key={card._id}/>
                ))}
            </div>
        </div>
    );
};

export default BoxShelterGoods;
