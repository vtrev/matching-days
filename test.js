// Tests for the matching days




describe(' Match function', function () {

    it('Should return true for matching days and false for non matching days given a 2 strings of days', function () {

        let matchDays = MatchingDays('Day1', 'Day2');
        assert.equal(matchDays.match('Monday', 'Monday'), true);
        assert.equal(matchDays.match('Friday', 'Monday'), false);
    });
});




describe('Matching days factory', function () {


    it('Given two days as parameters, it should return an array with days of the week and the status of the two days, match if they are the same, no match and nomatch 1 for non matching days ', function () {

        var testDays = [{
                day: 'Sunday',
                status: ''
            },
            {
                day: 'Monday',
                status: 'nomatch'
            },
            {
                day: 'Tuesday',
                status: 'nomatch1'
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

        var testDays1 = [{
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
                status: 'match'
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

        assert.deepEqual(MatchingDays('Monday', 'Tuesday').days, testDays);
        assert.deepEqual(MatchingDays('Wednesday', 'Wednesday').days, testDays1);


    });
});