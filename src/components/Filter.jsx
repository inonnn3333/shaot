import React, {useState} from "react";
import apiService from "../services/apiService.js";

const Filter = ({ item, onClose }) => {

    const [ startDate, setStartDate ] = useState(null);
    const [ endDate, setEndDate ] = useState(null);


    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const workDay = {
    //         date: item.date,
    //         startWork: startWorkEdit,
    //         endWork: endWorkEdit,
    //         comment: commentEdit
    //     }
    //     apiService.EditWorkDay(workDay);
    //     onClose();
    // }

    return (
        <div className="editItem-container">

            <div className="close">
                <button onClick={onClose}>
                    <img src="images/close-icon.png" alt="close-icon" />
                </button>
                {/* <div>{item.date}</div> */}
            </div>
            
            <div className="editItem-form">
                <form className="editItem-form">
                    <div className="editItem-div">
                        <label htmlFor="">ממתי?</label>
                        <input type="date" value={startDate} onChange={(e) => {setStartDate(e.target.value)}} />
                    </div>
                    <div className="editItem-div">
                        <label htmlFor="">עד?</label>
                        <input type="date" value={endDate} onChange={(e) => {setEndDate(e.target.value)}}/>
                    </div>
                    <div className="editItem-btn-div">
                        <button style={{background: "white"}}>
                            <img src="images/filter-icon.png" alt="close-icon"  />
                        </button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default Filter;
