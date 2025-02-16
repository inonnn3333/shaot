import React from 'react';
import { useStep } from '../../context/StepContext';
import { useDetails } from '../../context/WorkDetails';


const StartWork = () => {
    const { nextStep } = useStep();
    const { setStartTime, startTime } = useDetails();
    
    const currentTime = new Date().toLocaleTimeString('en-IL', {hour: '2-digit', minute:'2-digit'});

    return (

        <div className="startWork-container">
            <p>היי בייב,</p>
            <h2>מתי התחלת היום?</h2>
            <input type="time" value={currentTime} onChange={(e)=> {setStartTime(e.target.value)}}/>

            <button
                onClick={() => nextStep()}
                disabled={!startTime}
                >
                    <img src="images/arrow.png" alt="" />
            </button>

        </div>
    )
}

export default StartWork;
