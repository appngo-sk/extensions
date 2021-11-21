export {}

declare global {
    interface Array<T> {
        all(predicate?: (value: T, index: number, array: T[]) => T[]): T[]

        any(predicate?: (value: T, index: number, array: T[]) => T[]): T[]

        isEmpty(): boolean

        areEmpty(): boolean

        isNotEmpty(): boolean

        areNotEmpty(): boolean

        excluding(...items: T[]): T[]

        reject(predicate: (value: T, index: number, array: T[]) => boolean): T[]

        uniq(): T[]
    }
}

Object.defineProperties(Array.prototype, {
    all: {
        value: function<T>(predicate?: (value: T, index: number, array: T[]) => T[]): T[] {
            if (predicate == null) return this.all((value: T) => !!value)
            return this.every((value: T, index: number, array: T[]): T[] => predicate(value, index, array))
        }
    },
    any: {
        value: function<T>(predicate?: (value: T, index: number, array: T[]) => T[]): T[] {
            if (predicate == null) return this.any((value: T) => !!value)
            return this.some((value: T, index: number, array: T[]): T[] => predicate(value, index, array))
        }
    },
    isEmpty: {
        value: function (): boolean {
            return this.length === 0
        },
    },
    areEmpty: {
        value: function (): boolean {
            return this.isEmpty()
        }
    },
    isNotEmpty: {
        value: function (): boolean {
            return !this.isEmpty()
        }
    },
    areNotEmpty: {
        value: function (): boolean {
            return !this.isEmpty()
        }
    },
    excluding: {
        value: function <T>(...items: T[]): T[] {
            return this.reject((e: T) => items.includes(e))
        }
    },
    reject: {
        value: function <T>(predicate: (value: T, index: number, array: T[]) => boolean): T[] {
            return this.filter((value: T, index: number, array: T[]) => !predicate(value, index, array))
        }
    },
    uniq: {
        value: function <T>(): T[] {
            return this.filter((v: T, i: number, a: T[]) => a.indexOf(v) === i)
        }
    }
})
