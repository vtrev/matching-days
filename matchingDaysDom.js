document.addEventListener('DOMContentLoaded', function () {

    var dates = {};

    var match = MatchingDays();

    // init the two dates to current date on load and create date objects for them
    var dateElement1 = document.getElementById('d1');
    var dateElement2 = document.getElementById('d2');




    //function to match the two dates from the inputs
    function matchTheDays(date1, date2) {
        let firstDate = date1;
        let secondDate = date2;
        console.log(firstDate);
        console.log(firstDate);

        var weekDay1 = match.getDays(firstDate);
        var weekDay2 = match.getDays(firstDate);
        console.log(match.matchDays(weekDay1, weekDay2));
    }


    let date1 = dates.d1;
    let date2 = dates.d2;

    // console.log(matchTheDays(date1, date2));


    dateElement1.addEventListener('change', function () {
        localStorage.setItem('date1', JSON.stringify(match.makeDates(this.value)));
    });
    dateElement2.addEventListener('change', function () {
        localStorage.setItem('date2', JSON.stringify(match.makeDates(this.value)));
    });
});