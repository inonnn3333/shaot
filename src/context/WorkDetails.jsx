import { createContext, useContext, useState } from "react";

const WorkDetails = createContext();

export const WorkDetailsProvider = ({ children }) => {
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [comment, setComment] = useState('');

    return (
        <WorkDetails.Provider value={{ setStartTime, setEndTime, setComment, startTime, endTime, comment }}>
            {children}
        </WorkDetails.Provider>
    );
};

// Hook מותאם אישית לשימוש ב-Context
export const useDetails = () => {
    return useContext(WorkDetails);
};
