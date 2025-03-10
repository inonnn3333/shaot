import React, { useState } from 'react';
import { calculateMoney, calculateWorkingHours } from './calculate/calculateMonthly.js';
import { calculateWorkHours } from './calculate/calculateWorkHours.js';
import EditItem from './EditItem.jsx';

import useWorkDays from '../hooks/useWorkDays.js';
const MyBoard = () => {
    const { data, loading, error } = useWorkDays();
    const [editingItem, setEditingItem] = useState(null);

    const cutDate =(aDate) => {
        const newCutDate = aDate.slice(0, -5);
        return newCutDate;
    }

    const formatNumber = (num) => {
        if (num >= 1000 && num < 10000) {
            return num.toLocaleString(); // מוסיף פסיק לאלפים
        }
        return num.toString(); // מחזיר כפי שהוא אם לא 4 ספרות
    }

    
    if (loading) return <p>🔄 טוען נתונים...</p>;
    if (error) return <p>❌ שגיאה בטעינת הנתונים: {error}</p>;
    if (!data.length) return <p>⚠ אין נתונים זמינים</p>;
    return (
        <div className='myBoard-container'>
            <div>
                <h3>סך שעות החודש:
                    {calculateWorkingHours()}
                </h3>
                <h3>סך כסף החודש:
                    {formatNumber(calculateMoney())}
                </h3>
            </div>

            {data.map((d, i)=> (
                <div className='myBoard-work-details' key={i} onClick={() => setEditingItem(d)} >
                    <div className='myBoard-work-details-date'>{cutDate(d.date)}</div>
                    <div className='myBoard-work-details-content'>
                        <div className='myBoard-work-details-inner'>
                            <div>
                                <p>{d.startWork}</p>
                                <p>{d.endWork}</p>
                            </div>
                            <div>{calculateWorkHours(d.startWork, d.endWork)}</div>
                        </div>
                        {d.comment && 
                            <div>
                                <p>{d.comment}</p>
                            </div>
                        }
                    </div>
                </div>
            ))}

            {editingItem && <EditItem item={editingItem} onClose={() => setEditingItem(null)} />}
        </div>
    )
}

export default MyBoard;
