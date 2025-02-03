import React from 'react';
import { useStep } from '../../context/StepContext';


const Home = () => {
    const { nextStep, prevStep } = useStep();

    return (

        <div>
            <h2>אז מתי סיימנו היום?</h2>
            <input type="time" />

            <button onClick={() => nextStep()}>הבא</button>
            <button onClick={() => prevStep()}>חזור</button>


        </div>
    )
}

export default Home;
