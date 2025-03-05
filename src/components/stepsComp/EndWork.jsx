import React from 'react';
import { useStep } from '../../context/StepContext';
import { useDetails } from '../../context/WorkDetails';


const Home = () => {
    const { nextStep, prevStep } = useStep();
    const { setEndWork, endWork } = useDetails();

    // const currentTime = new Date().toLocaleTimeString('en-IL', {hour: '2-digit', minute:'2-digit'});


    return (

        <div className="endWork-container">
            <h2>אז מתי סיימנו היום?</h2>
            <input type="time" onChange={(e) => {setEndWork(e.target.value)}}/>

            <button onClick={() => nextStep()} disabled={!endWork}>הבא</button>
            <button onClick={() => prevStep()}>חזור</button>
        </div>
    )
}

export default Home;
