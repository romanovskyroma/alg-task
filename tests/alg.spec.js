const alg = require('../alg');

describe('Mark function', () => {
    const markMock = jest.spyOn(alg, "mark");
    const payload = [10, 8, 6, 9, 10, 3, 5, 7];
    const result = markMock(payload);
    test(
        'should be called once with payload',
        () => {
            expect(markMock).toHaveBeenCalledTimes(1);
            expect(markMock).toHaveBeenCalledWith(payload);
        }
    )
    test(
        'should be called with array of natural numbers',
        () => {
            payload.forEach(item => expect(item).toBeGreaterThanOrEqual(0));
        }
    )
    test(
        'should return result',
        () => {
            expect(result).toBeTruthy();
        }
    )
    test(
        'should return natural number',
        () => {
            expect(typeof result).toBe('number');
            expect(result).toBeGreaterThanOrEqual(0);
        }
    )
    test(
        'should remove one the lowest and one the highest mark, then calculate Arithmetic mean',
        () => {
            expect(result).toBe(7.5);
        }
    )
})

describe('MultMemb function', () => {
    const multMembMock = jest.spyOn(alg, "multMemb");
    const payload = 5;
    const result = multMembMock(payload);
    test(
        'should be called once with payload',
        () => {
            expect(multMembMock).toHaveBeenCalledTimes(1);
            expect(multMembMock).toHaveBeenCalledWith(payload);
        }
    )
    test(
        'should be called with natural number',
        () => {
            expect(payload).toBeGreaterThanOrEqual(0);
        }
    )
    test(
        'should return result',
        () => {
            expect(result).toBeTruthy();
        }
    )
    test(
        'should return natural number',
        () => {
            expect(typeof result).toBe('number');
            expect(result).toBeGreaterThanOrEqual(0);
        }
    )
    test(
        'should return multiplication of n members of 1/1 * 3/2 * 5/3 * ...',
        () => {
            expect(result).toBe(7.875);
        }
    )
})

describe('countTransf function', () => {
    const countTransfMock = jest.spyOn(alg, "countTransf");
    const payload = 5005510055;
    const result = countTransfMock(payload);
    test(
        'should be called once with payload',
        () => {
            expect(countTransfMock).toHaveBeenCalledTimes(1);
            expect(countTransfMock).toHaveBeenCalledWith(payload);
        }
    )
    test(
        'should be called with natural number',
        () => {
            expect(payload).toBeGreaterThanOrEqual(0);
        }
    )
    test(
        'should return result',
        () => {
            expect(result).toBeTruthy();
        }
    )
    test(
        'should return string with valid number',
        () => {
            expect(typeof result).toBe('string');
            expect(typeof +result).toBe('number');
            expect(result.length).toBeGreaterThanOrEqual(0);
        }
    )
    test(
        'should remove 0 and 5 digitals from natural number n',
        () => {
            expect(result).toBe('1');
        }
    )
})
