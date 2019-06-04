export default {
    addDays: (date, days) => {
        let result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    },
    subDays: (date, days) => {
        let result = new Date(date);
        result.setDate(result.getDate() - days);
        return result;
    },
}