document.addEventListener('DOMContentLoaded', function () {

    // date elements refs to the HTML
    var dateElement1 = document.getElementById('d1');
    var dateElement2 = document.getElementById('d2');
    //instance of the matchingDays factory
    var match = MatchingDays();

    //object to temporarily hold the weekdays to match
    var weekDays = {};
    var weekdaysElement = document.getElementById("boxes-container");
    var weekdaysTemplateSource = document.getElementById("matchingTemplate").innerHTML;
    var weekdaysTemplate = Handlebars.compile(weekdaysTemplateSource);
    var weekdaysHTML = weekdaysTemplate();
    weekdaysElement.innerHTML = weekdaysHTML;


    //event listeners for the two date inputs that will create date objects and store the weekdays into the weekDays object
    dateElement1.addEventListener('change', function (event) {
        removePreviousStyle();
        var dateString = event.target.value;
        var dateObject = match.makeDates(dateString);
        var weekDay = match.getDays(dateObject);
        weekDays.d1 = weekDay;
        doMatch(weekDays);



    });
    dateElement2.addEventListener('change', function (event) {
        removePreviousStyle();
        var dateString = event.target.value;
        var dateObject = match.makeDates(dateString);
        var weekDay = match.getDays(dateObject);
        weekDays.d2 = weekDay;
        doMatch(weekDays);



    });
}, false);