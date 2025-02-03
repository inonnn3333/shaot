import React from 'react';
import { useStep } from '../../context/StepContext';
import { useDetails } from '../../context/WorkDetails';


const Home = () => {
    const { nextStep, prevStep } = useStep();
    const { setEndTime, endTime } = useDetails();

    return (

        <div>
            <h2>אז מתי סיימנו היום?</h2>
            <input type="time" onChange={(e) => {setEndTime(e.target.value)}}/>

            <button onClick={() => nextStep()} disabled={!endTime}>הבא</button>
            <button onClick={() => prevStep()}>חזור</button>
        </div>
    )
}

export default Home;
