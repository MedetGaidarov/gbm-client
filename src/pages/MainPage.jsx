import React from 'react';
import Home from '../components/Home';
import Who from '../components/Who';
import Frames from '../components/Frames';

const MainPage = () => {
    return (
        <div>
            <main className="main">
                <Home />
        
                <Who />

                <Frames />
            </main>
        </div>
    );
}

export default MainPage;
