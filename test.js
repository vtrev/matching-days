describe('getValidDates function', function () {

    it('Should return true if there are two variables d1 and d2 both of type date ', function () {

        assert.equal(typeof (matchDays.getDates.d1), 'date');
        assert.equal(typeof (matchDays.getDates.d2), 'date');

    });

});