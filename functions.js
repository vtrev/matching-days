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
                days[i].status = 'match';
            }
            if (days[i].day == day2) {
                days[i].status = 'match1';
            }
        }
        return days
    }

}