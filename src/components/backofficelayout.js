import React from 'react';
import BackofficeMenu from './Menu';
import '../styles/backoffice.css';

const BackofficeLayout = ({ children }) => {
    return (
        <div className="backoffice-container">
            <div className="backoffice-sidebar">
                <BackofficeMenu />
            </div>
            <div className="backoffice-content">
                {children}
            </div>
        </div>
    );
};

export default BackofficeLayout;
