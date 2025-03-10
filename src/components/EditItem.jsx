import React, {useState} from "react";
import apiService from "../services/apiService.js";

const EditItem = ({ item, onClose }) => {

    const [ startWorkEdit, setStartWorkEdit ] = useState(item.startWork);
    const [ endWorkEdit, setEndWorkEdit ] = useState(item.endWork);
    const [ commentEdit, setCommentEdit ] = useState(item.comment);


    const handleSubmit = (e) => {
        e.preventDefault();
        const workDay = {
            date: item.date,
            startWork: startWorkEdit,
            endWork: endWorkEdit,
            comment: commentEdit
        }
        apiService.EditWorkDay(workDay);
        onClose();
    }

    return (
        <div className="editItem-container">

            <div className="close">
                <button onClick={onClose}>
                    <img src="images/close-icon.png" alt="close-icon" />
                </button>
                <div>{item.date}</div>
            </div>
            
            <div className="editItem-form">
                <form className="editItem-form">
                    <div className="editItem-div">
                        <label htmlFor="">התחלה:</label>
                        <input type="time" name="" id="" value={startWorkEdit} onChange={(e) => {setStartWorkEdit(e.target.value)}} />
                    </div>
                    <div className="editItem-div">
                        <label htmlFor="">סיום:</label>
                        <input type="time" name="" id="" value={endWorkEdit} onChange={(e) => {setEndWorkEdit(e.target.value)}}/>
                    </div>
                    <div className="editItem-div">
                        <label htmlFor="">הערות</label>
                        <input type="text" name="" id="" value={commentEdit && commentEdit} onChange={(e) => {setCommentEdit(e.target.value)}}/>
                    </div>
                    <div className="editItem-btn-div">
                        <button onClick={handleSubmit}>
                            <img src="images/check-icon.png" alt="close-icon" />
                        </button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default EditItem;
