var now = new Date();
var dayWeek;
var dayMonth;
switch (now.getDay()){
    case 1:
    dayWeek = "Monday";
        break;
    case 2:
        dayWeek = "Tuesday";
        break;
    case 3:
        dayWeek = "Wednesday";
        break;
    case 4:
        dayWeek = "Thursday";
        break;
    case 5:
        dayWeek = "Friday";
        break;
    case 6:
        dayWeek = "Saturday";
        break;
    case 0:
        dayWeek = "Sunday";
        break;
}
switch (now.getMonth()){
    case 0:
        dayMonth = "Jan"
        break;
    case 1:
        dayMonth = "Feb"
        break;
    case 2:
        dayMonth = "Mar"
        break;
    case 3:
        dayMonth = "Apr"
        break;
    case 4:
        dayMonth = "May"
        break;
    case 5:
        dayMonth = "Jun"
        break;
    case 6:
        dayMonth = "Jul"
        break;
    case 7:
        dayMonth = "Aug"
        break;
    case 8:
        dayMonth = "Sep"
        break;
    case 9:
        dayMonth = "Oct"
        break;
    case 10:
        dayMonth = "Nov"
        break;
    case 11:
        dayMonth = "Dec"
        break;

}
document.getElementsByClassName('text')[0].textContent = dayWeek+","+now.getDate()+" "+dayMonth;