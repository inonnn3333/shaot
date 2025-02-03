import React, {useState} from 'react';

const Home = () => {
    const [step, setStep] = useState(1);

    return (

        <div>
            <h2>אז מתי סיימנו היום?</h2>
            <input type="time" />

            <button>חזרה</button>
            <button onClick={() => setStep(3)}>הבא</button>


        </div>
    )
}

export default Home;
