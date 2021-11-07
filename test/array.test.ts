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
})
