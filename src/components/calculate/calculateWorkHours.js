
export const calculateWorkHours = (startTime, endTime) => {
    
    const start = new Date(`1970-01-01T${startTime}:00`);
    const end = new Date(`1970-01-01T${endTime}:00`);

    // חישוב ההפרש במילישניות -> המרה לשעות
    const diffMs = end - start;
    const hoursWorked = diffMs / (1000 * 60 * 60); // ממירים לשעות    
    return hoursWorked; 
};
