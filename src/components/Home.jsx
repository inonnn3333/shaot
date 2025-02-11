import React from 'react';
import { useStep } from '../context/StepContext';

import StartWork from './stepsComp/StartWork';
import EndWork from './stepsComp/EndWork';
import LastScreen from './stepsComp/LastScreen';
import MyBoard from './MyBoard';

const Home = () => {

    const { step } = useStep();
    
    return (

        <div>
            {
                (step === 1) ? <StartWork /> : (step === 2) ? <EndWork /> : <LastScreen />
            }
            <MyBoard/>
        </div>
    )
}

export default Home;
