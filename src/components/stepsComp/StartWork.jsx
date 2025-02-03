import React from 'react';
import { useStep } from '../../context/StepContext';
import { useDetails } from '../../context/WorkDetails';


const Home = () => {
    const { nextStep } = useStep();
    const { setStartTime, startTime } = useDetails();

    return (

        <div>
            <h2>מתי התחלנו היום?</h2>
            <input type="time" onChange= {(e)=> {setStartTime(e.target.value)}}/>

            <button
                onClick={() => nextStep()}
                disabled={!startTime}
                >הבא
            </button>

        </div>
    )
}

export default Home;
