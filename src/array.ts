export {}

declare global {
    interface Array<T> {
        isEmpty(): boolean

        areEmpty(): boolean

        isNotEmpty(): boolean

        areNotEmpty(): boolean
    }
}

Object.defineProperties(Array.prototype, {
    isEmpty: {
        value: function () {
            return this.length === 0
        },
    },
    areEmpty: {
        value: function () {
            return this.isEmpty()
        }
    },
    isNotEmpty: {
        value: function () {
            return !this.isEmpty()
        }
    },
    areNotEmpty: {
        value: function () {
            return !this.isEmpty()
        }
    }
})
