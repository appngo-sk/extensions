export {}

declare global {
    interface String {
        getDateFromISO(): string
    }
}

Object.defineProperties(String.prototype, {
    getDateFromISO: {
        value: function () {
            return this.split('T')[0]
        },
    },
})
