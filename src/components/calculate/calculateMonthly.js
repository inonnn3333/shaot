import { initialData } from "../../fakeData.js";

// let totalHours = 0;


export const calculateWorkingHours = () => {
    let totalHours = 0;
    initialData.forEach((item) => {
        //המרת השעות למספרים

        totalHours += parseInt(item.total);
    });
    return totalHours;
}

export const calculateMoney = () => {
    let totalHours = calculateWorkingHours();
    return totalHours * 28;    
}