import { createContext, useContext, useState } from "react";

const WorkDetails = createContext();

export const WorkDetailsProvider = ({ children }) => {
    const [startWork, setStartWork] = useState('');
    const [endWork, setEndWork] = useState('');
    const [comment, setComment] = useState('');

    return (
        <WorkDetails.Provider value={{ setStartWork, setEndWork, setComment, startWork, endWork, comment }}>
            {children}
        </WorkDetails.Provider>
    );
};

// Hook מותאם אישית לשימוש ב-Context
export const useDetails = () => {
    return useContext(WorkDetails);
};
