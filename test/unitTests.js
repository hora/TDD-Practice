const chai = require('chai');
const assert = chai.assert;

describe('sum', function() {
    it('returns 4 when adding 2 and 2', function() {
        assert.equal(sum(2, 2), 4);
    });
});