import React from 'react';
import { useStep } from '../../context/StepContext';
import { useDetails } from '../../context/WorkDetails';


const Home = () => {
    const { nextStep, prevStep } = useStep();
    const { setEndWork, endWork } = useDetails();


    return (

        <div className="endWork-container">
            <h2>אז מתי סיימנו היום?</h2>
            <input
                type="time"
                // value={endWork}
                onChange={(e) => {setEndWork(e.target.value)}}/>

            <button
                onClick={() => {
                    nextStep();
                    // saveInLocalStorage('endWork', endWork)
                }} disabled={!endWork}>הבא
            </button>

            <button onClick={() => prevStep()}>חזור</button>
        </div>
    )
}

export default Home;
