import React, {useState} from 'react';
import StartWork from './startWork';
import EndWork from './endWork';
import LastScreen from './lastScreen';



const Home = () => {
    const [step, setStep] = useState(1);

    return (

        <div>
            (step === 1) ? <StartWork /> : (step === 2) ? <EndWork /> : <LastScreen />
        </div>
    )
}

export default Home;
