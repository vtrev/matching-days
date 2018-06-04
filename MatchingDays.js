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

    function doMatch(day1, day2) {
        var days = [{
                day: 'Sunday',
                status: ''
            },
            {
                day: 'Monday',
                status: ''
            },
            {
                day: 'Tuesday',
                status: ''
            },
            {
                day: 'Wednesday',
                status: ''
            },
            {
                day: 'Thursday',
                status: ''
            },
            {
                day: 'Friday',
                status: ''
            },
            {
                day: 'Saturday',
                status: ''
            }


        ];
        if (day1 === day2) {

            for (let i = 0; i < days.length; i++) {

                if (days[i].day == day1) {
                    days[i].status = 'match';
                    console.log('matching days :' + day1);
                }
            }
            return days
        } else {
            for (var i = 0; i < days.length; i++) {

                if (days[i].day == day1) {
                    days[i].match == true;
                }
                if (days[i].day == day2) {
                    days[i].match1 == true;
                }
            }
            return days
        }



    }

    return {
        makeDates,
        getDays,
        doMatch
    }

};