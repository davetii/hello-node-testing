const utils = require('./utils');
const expect = require('expect');

it('should add 2 numbers', () => {
    let res = utils.add(11, 33);
    expect(res).toBeA('number');
    expect(res).toBe(44);
});

it('should figure square root', () => {
    let res = utils.square(4);
    expect(res).toBeA('number');
    expect(res).toBe(16);
});

it('should be equal objects', () => {
    let o1 = {first: 'Dave', last: 'Turner'};
    let o2 = {last: 'Turner', first: 'Dave'};
    let o3 = {last: 'Turner', first: 'dave'};
    expect(o1).toEqual(o2);
    expect(o1).toNotEqual(o3);
});

it('should include fields', () => {
    let o1 = {first: 'Dave', last: 'Turner'};
    expect(o1).toInclude({first: 'Dave'});
});

it('should add 2 numbers async', (done) => {
    let res = utils.asyncAdd(11, 33, (sum) => {
        expect(sum).toBeA('number');
        expect(sum).toBe(44);
        done();
    });
});


