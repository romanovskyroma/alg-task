const { mark, countTransf, multMemb } = require('../alg');

test(
    'mark should remove one the lowest and one the highest mark, then calculate Arithmetic mean',
    () => {
        expect(mark([10, 8, 6, 9, 10, 3, 5, 7])).toBe(7.5);
        expect(mark([10, 8, 6, 9, 10, 3, 5, 7, 3, 8])).toBe(7);
        expect(typeof mark([10, 4, 5])).toBe('number');
        expect(mark([10, 3, 5, 8, 1, 0, 1, 0, 9, 9.5, 7.5])).toBeGreaterThanOrEqual(0);
    }
)

test(
    'multMemb should return multiplication of n members of 1/1 * 3/2 * 5/3 * ...',
    () => {
        expect(multMemb(3)).toBe(2.5);
        expect(multMemb(5)).toBe(7.875);
        expect(typeof multMemb(0)).toBe('number');
        expect(multMemb(123)).toBeGreaterThanOrEqual(0);
    }
)

test(
    'countTransf should remove 0 and 5 digitals from natural number n',
    () => {
        expect(countTransf(5001512)).toBe('112');
        expect(countTransf(10005550002)).toBe('12');
        expect(countTransf(500550055)).toBe('');
        expect(typeof countTransf(5012345)).toBe('string');
    }
)