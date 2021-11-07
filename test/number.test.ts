import '../src/number'
import {expect} from 'chai'

describe('Number', () => {

    describe('isBetween()', () => {

        describe('min == n == max', () => {
            for (const n of [1, 0.1, 0, 0.0, -0.0, -0, -0.1, -1]) {
                it(`is true if the number ${n} is the min and max param`, () => {
                    expect((n).isBetween(n, n)).to.be.true
                })
            }
        })

        describe('Integer', () => {

            describe('x < y', () => {
                describe('positive', () => {

                    it('is true if the number is between specified numbers', () => {
                        expect((1).isBetween(0, 2)).to.be.true
                    })

                    it('is true if the number is the min param', () => {
                        expect((0).isBetween(0, 2)).to.be.true
                    })

                    it('is true if the number is the max param', () => {
                        expect((2).isBetween(0, 2)).to.be.true
                    })

                    it('is false if the number is less than min', () => {
                        expect((0).isBetween(1, 2)).to.be.false
                    })

                    it('is false if the number is greater than max', () => {
                        expect((3).isBetween(0, 2)).to.be.false
                    })
                })

                describe('negative', () => {

                    it('is true if the number is between specified numbers', () => {
                        expect((-1).isBetween(-2, 0)).to.be.true
                    })

                    it('is true if the number is the min param', () => {
                        expect((-1).isBetween(-2, -1)).to.be.true
                    })

                    it('is true if the number is the max param', () => {
                        expect((-1).isBetween(-1, 0)).to.be.true
                    })

                    it('is false if the number is less than min', () => {
                        expect((0).isBetween(-2, -1)).to.be.false
                    })

                    it('is false if the number is greater than max', () => {
                        expect((-3).isBetween(-2, 0)).to.be.false
                    })
                })
            })

            describe('x > y', () => {
                describe('positive', () => {

                    it('is true if the number is between specified numbers', () => {
                        expect((1).isBetween(2, 0)).to.be.true
                    })

                    it('is true if the number is the min param', () => {
                        expect((1).isBetween(2, 1)).to.be.true
                    })

                    it('is true if the number is the max param', () => {
                        expect((1).isBetween(1, 0)).to.be.true
                    })

                    it('is false if the number is less than min', () => {
                        expect((0).isBetween(2, 1)).to.be.false
                    })

                    it('is false if the number is greater than max', () => {
                        expect((3).isBetween(2, 0)).to.be.false
                    })
                })

                describe('negative', () => {

                    it('is true if the number is between specified numbers', () => {
                        expect((-1).isBetween(-2, 0)).to.be.true
                    })

                    it('is true if the number is the min param', () => {
                        expect((-1).isBetween(-2, -1)).to.be.true
                    })

                    it('is true if the number is the max param', () => {
                        expect((-1).isBetween(-1, 0)).to.be.true
                    })

                    it('is false if the number is less than min', () => {
                        expect((0).isBetween(-2, -1)).to.be.false
                    })

                    it('is false if the number is greater than max', () => {
                        expect((-3).isBetween(-2, 0)).to.be.false
                    })
                })
            })
        })

        describe('Float', () => {

            describe('x < y', () => {
                describe('positive', () => {

                    it('is true if the number is between specified numbers', () => {
                        expect((0.2).isBetween(0.1, 0.3)).to.be.true
                    })

                    it('is true if the number is the min param', () => {
                        expect((0.2).isBetween(0.2, 0.3)).to.be.true
                    })

                    it('is true if the number is the max param', () => {
                        expect((0.2).isBetween(0.1, 0.2)).to.be.true
                    })

                    it('is false if the number is less than min', () => {
                        expect((0.1).isBetween(0.2, 0.3)).to.be.false
                    })

                    it('is false if the number is greater than max', () => {
                        expect((0.3).isBetween(0.1, 0.2)).to.be.false
                    })
                })

                describe('negative', () => {

                    it('is true if the number is between specified numbers', () => {
                        expect((-0.2).isBetween(-0.3, -0.1)).to.be.true
                    })

                    it('is true if the number is the min param', () => {
                        expect((-0.2).isBetween(-0.2, -0.1)).to.be.true
                    })

                    it('is true if the number is the max param', () => {
                        expect((-0.2).isBetween(-0.3, -0.2)).to.be.true
                    })

                    it('is false if the number is less than min', () => {
                        expect((-0.3).isBetween(-0.2, -0.1)).to.be.false
                    })

                    it('is false if the number is greater than max', () => {
                        expect((-0.1).isBetween(-0.3, -0.2)).to.be.false
                    })
                })
            })
        })
    })
})
