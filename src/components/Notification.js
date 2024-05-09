import React from 'react';

export default function Notification(props) {
    return (
        <div className={`notification ${props.notificationType}`}>
            {props.notificationText}
        </div>
    );
}
