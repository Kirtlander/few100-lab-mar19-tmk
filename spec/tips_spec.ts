import { Tip } from '../src/tip';

describe('Tip class', () => {

    it('should initialize to default values with no ctor params', () => {
        let tip = new Tip();
        expect(tip.checkAmount).toEqual(0);
        expect(tip.tipPercent).toEqual(20);
    });

    it('should calculate tipAmount correctly', () => {
        const tip = new Tip(10, 100);
        expect(tip.tipAmount).toEqual(10);
        expect(tip.totalAmount).toEqual(110);

        tip.tipPercent = 20;
        expect(tip.tipAmount).toEqual(20);
        expect(tip.totalAmount).toEqual(120);

        tip.checkAmount = 1000;
        expect(tip.tipAmount).toEqual(200);
        expect(tip.totalAmount).toEqual(1_200);

    });
});