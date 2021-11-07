import '../src/string'
import {expect} from "chai";

describe('String', () => {
    describe('getDateFromISO()', () => {
        it('returns date 2000-01-01 string from iso', () => {
            const date = new Date(2000, 0, 2)
            const iso = date.toISOString()
            expect(iso.getDateFromISO()).to.eq('2000-01-01')
        })

        it('returns date 2000-12-31 string from iso', () => {
            const date = new Date(2000, 11, 32)
            const iso = date.toISOString()
            expect(iso.getDateFromISO()).to.eq('2000-12-31')
        })
    })
})
