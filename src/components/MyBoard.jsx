import React, { useState, useEffect } from 'react';
import {initialData} from '../fakeData.js';
import { calculateMoney, calculateWorkingHours } from './calculate/calculateMonthly.js';


const MyBoard = () => {
    const [data, setData] = useState();

    useEffect(() =>{
        setData(initialData);
    },[])
    return (

        <div>
            <div>
                <h3>סך שעות החודש:
                    {calculateWorkingHours()}
                </h3>
                <h3>סך כסף החודש:
                    {calculateMoney()}
                </h3>
            </div>
            {data ? (
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>תאריך</th>
                            <th>התחלה</th>
                            <th>סיום</th>
                            <th>סה"כ שעות</th>
                            <th>הערות</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                {Object.values(item).map((value, i) => (
                                    <td key={i}>{value}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <div>טוען נתונים..</div>
            )}
        </div>
    )
}

export default MyBoard;
