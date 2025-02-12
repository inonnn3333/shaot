import React from 'react';
import { useStep } from '../../context/StepContext';
import { useDetails } from '../../context/WorkDetails';
import { calculateWorkHours } from '../calculate/calculateWorkHours';

const Home = () => {
    const { nextStep, prevStep } = useStep();
    const { setStartTime, setEndTime, setComment, startTime, endTime } = useDetails();
    
    const calculateWorkTime = (startTime, endTime) =>  {
        const time =  calculateWorkHours(startTime, endTime);
        if (time === 1) {
            return 'שעה אחת';
        } else if(time === 2) {
            return 'שעתיים';
        } 
        
        return `${time} שעות`;   
    } 

    return (
        <div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>שעת התחלה</th>
                            <th>שעת סיום</th>
                        </tr>
                        <tr>
                            <th><input
                                type="time"
                                value={startTime}
                                onChange={(e) => setStartTime(e.target.value)}
                            /></th>
                            <th><input 
                                type="time" 
                                value={endTime}
                                onChange={(e) => setEndTime(e.target.value)}
                            /></th>
                        </tr>
                    </thead>
                </table>
            </div>
            <div>
                <h2>אז להיום סה"כ:
                    {calculateWorkTime(startTime, endTime)}
                </h2>
            </div>

            <hr />
            <form action="">
                <label htmlFor="">אם יש הערות, זה הזמן</label>
                <input type="text" onChange={(e)=> setComment(e.target.value)}/>
            </form>

            <button onClick={() => nextStep()}>יאללה זהו</button>
            <button onClick={() => prevStep()}>חזור</button>
        </div>
    )
}

export default Home;
