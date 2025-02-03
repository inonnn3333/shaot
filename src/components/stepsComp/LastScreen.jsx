import React, {useState} from 'react';

const Home = () => {
    const [step, setStep] = useState(1);

    return (

        <div>
            <form action="">
                <label htmlFor="">אם יש הערות, זה הזמן</label>
                <input type="text" />
            </form>

            <button>חזרה</button>
            <button onClick={() => setStep(3)}>יאללה כמה יצא היום?</button>
        </div>
    )
}

export default Home;
