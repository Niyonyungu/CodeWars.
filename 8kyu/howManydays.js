//codewars kata


function howManydays(month) {
    var days;
    switch (month) {
        case 1:
            days = 31;
            break;
        case 3:
            days = 31;
            break;
        case 5:
            days = 31;
            break;
        case 7:
            days = 31;
            break;
        case 8:
            days = 31;
            break;
        case 10:
            days = 31;
            break;
        case 12:
            days = 31;
            break;
        case 4:
            days = 30;
            break;
        case 6:
            days = 30;
            break;
        case 9:
            days = 30;
            break;
        case 11:
            days = 30;
            break;
        case 2:
            days = 28;
            break;

    }
    return days;
}




// other ways 
function howManydays(n) {

    var month = n;
    var days;

    if (month === "1" || month === "3" || month === "5" || month === "7" || month === "8" || month === "10" || month === "12") {
        days = 31;
    } else if (month === "4" || month === "6" || month === "9" || month === "11") {
        days = 30;
    } else if (month === "2") {
        days = 28;
    }

    console.log(month + " has " + days + " days");

}

howManydays("3");





