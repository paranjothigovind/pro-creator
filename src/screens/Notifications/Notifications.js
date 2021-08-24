import React from 'react';
import { notificationPlaceholder } from '../../assets/images';
import Tabs from '../../components/tabs/tabs';

const Notifications = () => {
    return(
        <div>
            <div className="notification-wave">
                <svg viewBox="0 0 450 300" preserveAspectRatio="xMinYMin meet">
                    <path
                        d="M0, 100 C150, 150 550,
                            0 500, 200 L600, 00 L0, 0 Z"
                        style={{ stroke: "none", fill: "rgb(232, 239, 255)" ,zIndex: -10 }}
                    ></path>
                </svg>
            </div>
            <div className="notification_container">
                <h1 className="notification_header">Notifications</h1>
                <div className="notification_content">
                    <img src={notificationPlaceholder} />
                    <h5>No notifcations yet</h5>
                    <p>Here you will see the external changes in your shared folders, tags from your peers and other updates</p>
                </div>
            </div>
            <Tabs />
        </div>
    )
}

export default Notifications;