import React from 'react';
import './notification-card.scss'
import {INotification} from "../../models/INotification";

const NotificationCard = ({notification}: {notification: INotification}) => {
    return (
        <div className={'notification'}>
            <div className={'notification__message'}>
                {notification.message}
            </div>
        </div>
    );
};

export default NotificationCard;