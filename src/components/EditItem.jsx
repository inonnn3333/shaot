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
    }

    return (
        <div className="editItem-container">
            <button onClick={onClose}>X</button>
            
            <div>{item.date}</div>

            <div>
                <form action="">
                    <div>
                        <label htmlFor="">התחלה</label>
                        <input type="time" name="" id="" value={startWorkEdit} onChange={(e) => {setStartWorkEdit(e.target.value)}} />
                    </div>
                    <div>
                        <label htmlFor="">סיום</label>
                        <input type="time" name="" id="" value={endWorkEdit} onChange={(e) => {setEndWorkEdit(e.target.value)}}/>
                    </div>
                    <div>
                        <label htmlFor="">הערות</label>
                        <input type="text" name="" id="" value={commentEdit && commentEdit} onChange={(e) => {setCommentEdit(e.target.value)}}/>
                    </div>
                    <div>
                        <button onClick={handleSubmit}>סיימתי</button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default EditItem;
