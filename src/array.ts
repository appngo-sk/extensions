export {}

declare global {
    interface Array<T> {
        isEmpty(): boolean

        areEmpty(): boolean

        isNotEmpty(): boolean

        areNotEmpty(): boolean

        excluding(...items: T[]): Array<T>
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
    },
    excluding: {
        value: function<T> (...items: T[]) {
            return this.filter((e: T) => !items.includes(e))
        }
    }
})
