document.addEventListener('DOMContentLoaded', function () {

    var weekDays = {};

    function doMatch(days) {
        console.log('days : ' + days.d1);
        console.log('days : ' + days.d2);
        if ((days.d1) && (days.d2)) {
            console.log(match.matchDays(days.d1, days.d2));

        }



    };


    var match = MatchingDays();

    // init the two dates to current date on load and create date objects for them
    var dateElement1 = document.getElementById('d1');
    var dateElement2 = document.getElementById('d2');

    //function to match the two dates from the inputs
    function matchTheDays(date1, date2) {

    }



    dateElement1.addEventListener('change', function (event) {
        var dateString = event.target.value;
        var dateObject = match.makeDates(dateString);
        var weekDay = match.getDays(dateObject);
        weekDays.d1 = weekDay;
        doMatch(weekDays);


    });
    dateElement2.addEventListener('change', function (event) {

        var dateString = event.target.value;
        var dateObject = match.makeDates(dateString);
        var weekDay = match.getDays(dateObject);
        weekDays.d2 = weekDay;
        // runAfterAdd(weekdays);
        // console.log();
        doMatch(weekDays);

    });
}, false);