import { initialData } from "../../fakeData.js";

const calculateWorkingHours = () => {
    let totalHours = 0;
    console.log(initialData);
    
    initialData.forEach((item) => {
        totalHours += parseInt(item.total);
    });
    return totalHours;
}

const calculateMoney = () => {
    let totalHours = calculateWorkingHours();
    return totalHours * 28;    
}

export { calculateMoney, calculateWorkingHours };