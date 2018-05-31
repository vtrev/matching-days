var MatchingDays = function () {


    let makeDates = function (dateString) {

        let dateObject = new Date(dateString);
        // let d2 = new Date(date1);
        return dateObject
    }
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

}