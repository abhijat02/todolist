
exports.getDate = getDate;

function getDate(){

let today = new Date();
    let options = {
        day: "numeric",
        weekday: "long",
        month: "long"
    }

    let day = today.toLocaleDateString("en-US", options);
    return day;
}
exports.getDay = getDay;

function getDay(){

    let today = new Date();
        let options = {
            
            weekday: "long"
            
        }
    
        let day = today.toLocaleDateString("en-US", options);
        return day;
    }