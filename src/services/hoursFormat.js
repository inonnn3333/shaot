import moment from "moment";

const changeHourFormatToFullFormat = (aHour) => {
        const todayDate = moment().format("YYYY-MM-DD"); // קביעת התאריך הנוכחי
        const fullDateTime = `${todayDate}T${aHour}:00.000Z`;

        return fullDateTime;
    }


const hoursFormatService = {
    changeHourFormatToFullFormat
}
export default hoursFormatService;