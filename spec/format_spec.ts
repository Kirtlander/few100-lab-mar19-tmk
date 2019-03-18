import * as format from '../src/format';

describe('format', () => {

    it('should properly format currency', () => {

        expect(format.currency(10)).toEqual("$10.00");
        expect(format.currency(0)).toEqual("$0.00");
        expect(format.currency(1.234)).toEqual("$1.23");
        expect(format.currency(1100.23)).toEqual("$1,100.23");
    });

    it('should properly format percentages', () => {
        expect(format.percentage(0)).toEqual("0%");
        expect(format.percentage(1.234)).toEqual("1%");
    });
});