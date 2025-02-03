import React, {useState} from 'react';

const Home = () => {
    const [step, setStep] = useState(1);

    return (

        <div>
            <input type="time" />

            <button onClick={() => setStep(3)}>הבא</button>

        </div>
    )
}

export default Home;
