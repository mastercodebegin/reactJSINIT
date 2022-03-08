export function dateFormatter(date) {
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    var finalDateStr = new Date(date).toLocaleDateString('en-US',options);
     return finalDateStr;
}
export function dateTimeFormatter(date) {
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var localtime = new Date(date).toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric' , hour12:false })
     return localtime;
}
export function dateWithWeekDayFormatter(date) {
    var options = { weekday: 'long',year: 'numeric', month: 'long', day: 'numeric' };
    var finalDateStr = new Date(date).toLocaleDateString('en-US',options);
     return finalDateStr;
}
export function dateWithoutYearFormatter(date) {
    var options = {  month: 'long', day: 'numeric' };
    var finalDateStr = new Date(date).toLocaleDateString('en-US',options);
     return finalDateStr;
}
export function particularDateFormatter(date) {
    var options = { day: 'numeric' };
    var finalDateStr = new Date(date).toLocaleDateString('en-US',options);
     return finalDateStr;
}
export function particularMonthFormatter(date) {
    var options = { month: 'long' };
    var finalDateStr = new Date(date).toLocaleDateString('en-US',options);
     return finalDateStr;
}
export function particularWeekDayFormatter(date) {
    var options = { weekday: 'long'};
    var finalDateStr = new Date(date).toLocaleDateString('en-US',options);
     return finalDateStr;
}

export function timeConvert(totalmin) {
    console.log(totalmin);
    
    var num = totalmin;
    var hours = (num / 60);
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    if (rminutes < 10) {
        return rhours + " hrs" +':'+ '0' + rminutes + " mins";
    }else{
    return rhours + " hrs " +':'+ rminutes + " mins";
    }
    }