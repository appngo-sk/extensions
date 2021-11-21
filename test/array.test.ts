import '../src/array'
import {expect} from 'chai'

describe('Array', () => {
    describe('isEmpty()', () => {
        it('is true when array is empty', () => {
            expect([].isEmpty()).to.be.true
        })

        it('is false when array is not empty', () => {
            expect([1].isEmpty()).to.be.false
        })
    })

    describe('isNotEmpty()', () => {
        it('is true when array is empty', () => {
            expect([].isNotEmpty()).to.be.false
        })

        it('is false when array is not empty', () => {
            expect([1].isNotEmpty()).to.be.true
        })
    })

    describe('areEmpty()', () => {
        it('is true when array is empty', () => {
            expect([].areEmpty()).to.be.true
        })

        it('is false when array is not empty', () => {
            expect([1].areEmpty()).to.be.false
        })
    })

    describe('areNotEmpty()', () => {
        it('is true when array is empty', () => {
            expect([].areNotEmpty()).to.be.false
        })

        it('is false when array is not empty', () => {
            expect([1].areNotEmpty()).to.be.true
        })
    })

    describe('excluding()', () => {
        it('returns an array without specified element', () => {
            expect([1, 2, 3].excluding(2)).to.deep.eq([1, 3])
        })

        it('returns an array without specified elements', () => {
            expect([1, 2, 3].excluding(1, 3)).to.deep.eq([2])
        })

        it('returns the same array if it does not include item to be excluded', () => {
            expect([1, 2, 3].excluding(4)).to.deep.eq([1, 2, 3])
        })
    })
})
