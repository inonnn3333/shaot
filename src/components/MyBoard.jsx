import React, { useState, useEffect } from 'react';
import {initialData} from '../fakeData.js';
import { calculateMoney, calculateWorkingHours } from './calculate/calculateMonthly.js';
import { calculateWorkHours } from './calculate/calculateWorkHours.js';
import EditItem from './EditItem.jsx';


const MyBoard = () => {
    const [data, setData] = useState([]);
    const [editingItem, setEditingItem] = useState(null);

    const cutDate =(aDate) => {
        const newCutDate = aDate.slice(0, -5);
        return newCutDate;
    }
    useEffect(() =>{
        setData(initialData);
    },[])
    return (
        <div className='myBoard-container'>
            <div>
                <h3>סך שעות החודש:
                    {calculateWorkingHours()}
                </h3>
                <h3>סך כסף החודש:
                    {calculateMoney()}
                </h3>
            </div>

            {data.map((d, i)=> (
                <div className='myBoard-work-details' key={i}>
                    <div className='myBoard-work-details-date'>{cutDate(d.date)}</div>
                    <div className='myBoard-work-details-inner'>
                        <div>
                            <p>{d.startWork}</p>
                            <p>{d.endWork}</p>
                        </div>
                        {d.comment && 
                            <div>
                                <p>{d.comment}</p>
                            </div>
                        }
                        <div>{calculateWorkHours(d.startWork, d.endWork)}</div>
                        <div className='edit-div'>
                            <button className='edit-button' onClick={() => setEditingItem(d)}>
                                <img src="images/edit-icon.png" alt="edit-icon"/>
                            </button>
                        </div>
                    </div>
                </div>
            ))}

            {editingItem && <EditItem item={editingItem} onClose={() => setEditingItem(null)} />}
        </div>
    )
}

export default MyBoard;
