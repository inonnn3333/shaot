import React, { useState } from 'react';
import { calculateMoney, calculateWorkingHours } from './calculate/calculateMonthly.js';
import { calculateWorkHours } from './calculate/calculateWorkHours.js';
import EditItem from './EditItem.jsx';
import Filter from './Filter.jsx';

import useWorkDays from '../hooks/useWorkDays.js';
const MyBoard = () => {
    const { data, loading, error } = useWorkDays();
    const [editingItem, setEditingItem] = useState(null);
    const [filterOpen, setFilterOpen] = useState(null);

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
            <div className='myBoard-header'>
                <h3>{calculateWorkingHours()} שעות
                </h3>
                <h3>{formatNumber(calculateMoney())} ש"ח
                </h3>
                <button onClick={() => setFilterOpen(true)}>
                    <img src="images/filter-icon.png" alt="close-icon" />
                </button>
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
                        {d.comment && <hr style={{border: "solid, 1px, #3c3c3c60", width: "100%"}}/>}

                        {d.comment && 
                            <div >
                                <p>{d.comment}</p>
                            </div>
                        }
                    </div>
                </div>
            ))}

            {editingItem && <EditItem item={editingItem} onClose={() => setEditingItem(null)} />}
                {filterOpen && <Filter item={editingItem} onClose={() => setFilterOpen(false)} />}
        </div>
    )
}

export default MyBoard;
