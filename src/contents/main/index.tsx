import React from 'react';

import './styles.scss';
import { Outlet } from 'react-router-dom';

const MainContent: React.FC = () => {
    return (
        <main>
            <div className="container">
                <Outlet />
            </div>
        </main>
    );
};

export default MainContent;
