describe('getValidDates function', function () {

    it('Should be able to parse a string into a date object ', function () {
        let date1 = "2018-05-04";
        let date2 = "2017-06-15"
        let match = MatchingDays();
        assert.equal(typeof (match.makeDates(date1)), 'object');
        assert.equal(typeof (match.makeDates(date2)), 'object');
    });

    it('Should get the correct weekday given a date', function () {
        let date1 = "2018-05-04";
        let date2 = "2017-06-15";
        let match = MatchingDays();
        let dateObject1 = match.makeDates(date1);
        let dateObject2 = match.makeDates(date2);

        assert.equal(match.getDays(dateObject1), 'Friday');
        assert.equal(match.getDays(dateObject2), 'Thursday');

    });
    it("Should return true if the days match and false if they don't", function () {
        let match = MatchingDays();
        assert.equal(match.matchDays('Monday', 'Monday'), true);
        assert.equal(match.matchDays('Monday', 'Friday'), false);


    });
});