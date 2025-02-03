import React from 'react';
import { useStep } from '../../context/StepContext';


const Home = () => {
    const { nextStep } = useStep();

    return (

        <div>
            <h2>מתי התחלנו היום?</h2>
            <input type="time" />

            <button
                onClick={() => nextStep(2)}
                // disabled={step===1}
                >הבא
            </button>

        </div>
    )
}

export default Home;
