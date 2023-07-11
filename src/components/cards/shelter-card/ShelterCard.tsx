import React, {useState} from 'react';
import './shelter-card.scss'
import {IProductCard} from "../../../models/IProductCard";
import {API_URL} from "../../../http";
import ButtonBurger from "../../buttons/button-burger/ButtonBurger";
import {useNavigate} from "react-router-dom";
import Cover from "../../cover/Cover";
import DeletionConfirmation from "../../modals/deletion-confirmation/DeletionConfirmation";
import ChangeCardSvg from "../../svg/ChangeCardSvg";
import DeleteSvg from "../../svg/DeleteSvg";

interface IProps {
    card: IProductCard,
    onDelete: (id: string) => Promise<boolean>
}

const ShelterCard = ({card, onDelete}: IProps) => {
    const navigate = useNavigate()
    const [isPressed, setIsPressed] = useState(false)
    const [isDeleteModal, setIsDeleteModal]= useState(false)

    const onChangeCard = () => {
        navigate(`create/${card._id}`, {
            state: {
                ...card
            }
        })
    }

    const onDeleteCard = async (id: string) => {
        const answer = await onDelete(id);
        if (answer) setIsDeleteModal(false)
        console.log('answer onDelete', answer)
    }

    return (
        <div className={'shelter-card'}>
            <div className={'shelter-card__header'}>
                <div className={'shelter-card__image'}>
                    <img src={`${API_URL}${card.mainPhoto}`} alt={card.information.name}/>
                </div>
                <div className={'shelter-card__statistic'}>
                    <div className={'shelter-card__tools'}>
                        <div className={'shelter-card__burger'}>

                            <ButtonBurger isPressed={isPressed} setIsPressed={setIsPressed} isLittle={true}/>
                        </div>
                        <div className={`card-tools ${isPressed && 'active'}`}>
                            <div className={'card-tools__item'} onClick={onChangeCard}>
                                <ChangeCardSvg/>
                                <span>редактировать</span>
                            </div>
                            <div className={'card-tools__item'} onClick={() => setIsDeleteModal(true)}>
                                <DeleteSvg/>
                                <span>удалить</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <h4 className={'card-name'}>
                {card.information.name}
            </h4>
            {isDeleteModal && <Cover callback={() => setIsDeleteModal(false)} zIndex={9998}/>}
            {isDeleteModal && <DeletionConfirmation
                name={card.information.name}
                closeModal={() => setIsDeleteModal(false)}
                onDelete={() => onDeleteCard(card._id)}
            />}
            {/*<p>*/}
            {/*    {card.categories.category}*/}
            {/*</p>*/}
        </div>
    );
};

export default ShelterCard;
