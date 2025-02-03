import React from 'react';
import { useStep } from '../../context/StepContext';

const Home = () => {
    const { nextStep, prevStep } = useStep();

    return (

        <div>
            <div class="table_component" role="region" tabindex="0">
                <table>
                    <thead>
                        <tr>
                            <th>שעת התחלה</th>
                            <th>שעת סיום</th>
                        </tr>
                        <tr>
                            <td>08:00</td>
                            <td>14:00</td>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
            </div>
            <form action="">
                
                <label htmlFor="">אם יש הערות, זה הזמן</label>
                <input type="text" />
            </form>

            <button onClick={() => nextStep()}>יאללה כמה יצא היום?</button>
            <button onClick={() => prevStep()}>חזור</button>
        </div>
    )
}

export default Home;
