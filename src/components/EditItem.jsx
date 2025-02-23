import React from "react";

const EditItem = ({ item, onClose }) => {

    return (
        <div className="edititem-container">
            <button onClick={onClose}>X</button>
            
            <div>לערוך את ה: {item.date}</div>

            <div>
                <form action="">
                    <div>
                        <label htmlFor="">התחלה</label>
                        <input type="time" name="" id="" value={item.startWork} />
                    </div>
                    <div>
                        <label htmlFor="">סיום</label>
                        <input type="time" name="" id="" value={item.endWork} />
                    </div>
                    <div>
                        <label htmlFor="">הערות</label>
                        <input type="text" name="" id="" value={
                            item.endWork && item.comment} />
                    </div>
                    <div>
                        <button>סיימתי</button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default EditItem;
