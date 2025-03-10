import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    return (
        <div className='header-container'>
            {/* בלחיצה על הכפתור לפתוח את הרכיב my-board */}
            <button onClick={() =>{navigate('/my-board')}}>
                <img src="images/details-icon.png" alt="arrow-details-up" />
            </button>
            <button>
                <img src="images/setting-icon.png" alt="arrow-details-up" />
            </button>
        </div>
    )
}

export default Header;