import React from 'react';
import './deleteion-confirmation.scss'

interface Props {
    name: string,
    closeModal: () => void,
    onDelete: () => void
}

const DeletionConfirmation = ({name, closeModal, onDelete}: Props) => {
    return (
        <div className={'delete-card'}>
            <h4 className={'delete-card__title'}>Вы действительно хотите удалить "{name}",</h4>
            <p className={'delete-card__subtitle'}>
                Этот товар будет безвозвратно удален. Это
                действие нельзя отменить
            </p>
            <div className={'delete-card__buttons'}>
                <button className={'button button_dark'} onClick={closeModal}>
                    Отменить
                </button>
                <button className={'button button_light'} onClick={onDelete}>
                    Удалить
                </button>
            </div>
        </div>
    );
};

export default DeletionConfirmation;