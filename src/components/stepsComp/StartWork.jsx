import React from 'react';
import { useStep } from '../../context/StepContext';
import { useDetails } from '../../context/WorkDetails';


const StartWork = () => {
    const { nextStep } = useStep();
    const { setStartWork, startWork } = useDetails();
    
    // const currentTime = new Date().toLocaleTimeString('en-IL', {hour: '2-digit', minute:'2-digit'});

    return (

        <div className="startWork-container">
            <p>היי בייב,</p>
            <h2>מתי התחלת היום?</h2>
            <input type="time"  onChange={(e)=> {setStartWork(e.target.value)}}/>

            <button
                onClick={() => {nextStep()}}
                disabled={!startWork}
                >
                    <img src="images/arrow.png" alt="" />
            </button>

        </div>
    )
}

export default StartWork;
