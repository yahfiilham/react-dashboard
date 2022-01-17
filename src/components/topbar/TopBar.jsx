import React from 'react';

import './topbar.css';
import nicoRobin from '../widget/Nico-Robin.jfif';

import { NotificationsNone, Language, Settings } from '@mui/icons-material';

const TopBar = () => {
    return (
        <div className='topbar'>
            <div className="topbar-wrapper">
                <div className="top-left">
                    <span className="logo">Admin</span>
                </div>
                <div className="top-right">
                    <div className="topbar-icon-container">
                        <NotificationsNone />
                        <span className="top-icon-badge">2</span>
                    </div>
                    <div className="topbar-icon-container">
                        <Language />
                        <span className="top-icon-badge">2</span>
                    </div>
                    <div className="topbar-icon-container">
                        <Settings />
                    </div>

                    <img src={nicoRobin} alt="profile" className="top-avatar" />
                </div>
            </div>
        </div>
    )
}

export default TopBar;
