import React from 'react';
import { useStep } from '../../context/StepContext';
import { useDetails } from '../../context/WorkDetails';


const StartWork = () => {
    const { nextStep } = useStep();
    const { setStartWork, startWork } = useDetails();


    return (

        <div className="startWork-container">
            <p>היי בייב,</p>
            <h2>מתי התחלת היום?</h2>
            <input
                type="time"
                // value={startWork}
                onChange={(e)=> {setStartWork(e.target.value)}}/>

            <button
                onClick={() => {
                    nextStep();
                    // saveInLocalStorage('startWork',startWork)
                }}
                disabled={!startWork}
                >
                    <img src="images/arrow.png" alt="arrow-icon" />
            </button>

        </div>
    )
}

export default StartWork;
