document.addEventListener('DOMContentLoaded', function () {

    // html elements
    var dateElement1 = document.getElementById('d1');
    var dateElement2 = document.getElementById('d2');
    //instance of the matchingDays factory
    var match = MatchingDays();
    //object to temporarily hold the weekdays to match
    var weekDays = {};

    function doMatch(days) {
        if ((days.d1) && (days.d2)) {
            ///try using localstorage for this
            /// or if there is a element with that class,remove it
            if (match.matchDays(days.d1, days.d2) == true) {
                while (document.getElementsByClassName('match')[0]) {
                    document.getElementsByClassName('match')[0].classList.remove('match');
                }
                while (document.getElementsByClassName('nomatch')[0]) {
                    document.getElementsByClassName('nomatch').classList.remove('nomatch');
                }
                while (document.getElementsByClassName('nomatch1')[0]) {
                    document.getElementsByClassName('nomatch1').classList.remove('nomatch1');
                }
                document.getElementById(days.d1).classList.add('match');
                document.getElementById(days.d2).classList.add('match');

            } else {
                while (document.getElementsByClassName('match')[0]) {
                    document.getElementsByClassName('match')[0].classList.remove('match');
                }
                while (document.getElementsByClassName('nomatch')[0]) {
                    document.getElementsByClassName('nomatch').classList.remove('nomatch');
                }
                while (document.getElementsByClassName('nomatch1')[0]) {
                    document.getElementsByClassName('nomatch1').classList.remove('nomatch1');
                }
                document.getElementById(days.d1).classList.add('nomatch');
                document.getElementById(days.d2).classList.add('nomatch1');

            }
            console.log(match.matchDays(days.d1, days.d2));
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