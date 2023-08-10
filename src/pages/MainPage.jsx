import React from 'react';
import Home from '../components/Home';
import Who from '../components/Who';
import Frames from '../components/Frames';
import { useHeaderContext } from '../context/HeaderContextProvider';

const MainPage = () => {
    const { setFixedHeader } = useHeaderContext();
    setFixedHeader(true);

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
