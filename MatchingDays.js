var MatchingDays = function () {

    //return a date object given a string
    let makeDates = function (dateString) {

        let dateObject = new Date(dateString);
        return dateObject
    }
    //return a weekday as string given a full date
    let getDays = function (date) {

        switch (date.getDay()) {
            case 0:
                return "Sunday";
                break
            case 1:
                return "Monday";
                break;
            case 2:
                return "Tuesday";
                break;
            case 3:
                return "Wednesday";
                break;
            case 4:
                return "Thursday";
                break;
            case 5:
                return "Friday";
                break;
            case 6:
                return "Saturday";
        }
    }
    //take in 2 weekdays and return true if the match, false instead
    var matchDays = function (day1, day2) {
        if (day1 === day2) {
            return true
        } else {
            return false
        }
    };

    return {
        makeDates,
        getDays,
        matchDays
    }

};