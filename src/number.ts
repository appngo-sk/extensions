export {}

declare global {
    interface Number {
        isBetween(x: number, y: number): boolean
    }
}

Object.defineProperties(Number.prototype, {
    isBetween: {
        value: function (x: number, y: number) {
            return (this - x) * (this - y) <= 0
        },
    },
})
