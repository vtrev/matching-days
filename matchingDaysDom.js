document.addEventListener('DOMContentLoaded', function () {

    // date elements refs to the HTML
    var dateElement1 = document.getElementById('d1');
    var dateElement2 = document.getElementById('d2');
    //instance of the matchingDays factory
    var match = MatchingDays();

    //object to temporarily hold the weekdays to match
    var weekDays = {};

    //remove previous styling 

    var removePreviousStyle = function () {
        while (document.getElementsByClassName('match')[0]) {
            document.getElementsByClassName('match')[0].classList.remove('match');
        }
        for (var i = 0; i < document.getElementsByClassName('nomatch').length; i++) {
            document.getElementsByClassName('nomatch')[i].classList.remove('nomatch');
            document.getElementsByClassName('nomatch1')[i].classList.remove('nomatch1');
        };
    }
    //match two weekdays
    var doMatch = function (days) {
        if ((days.d1) && (days.d2)) {
            if (match.matchDays(days.d1, days.d2) == true) {
                removePreviousStyle();
                document.getElementById(days.d1).classList.add('match');
            } else {
                removePreviousStyle();
                document.getElementById(days.d1).classList.add('nomatch');
                document.getElementById(days.d2).classList.add('nomatch1');
            }
        }
    };

    //event listeners for the two date inputs that will create date objects and store the weekdays into the weekDays object
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
        doMatch(weekDays);

    });
}, false);