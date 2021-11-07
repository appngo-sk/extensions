# Extensions for TypeScript / JavaScript

Extension methods for built-in objects in javascript with typescript support. 

### Defined non-iterable properties on prototypes

```javascript
Object.defineProperties(Array.prototype, {
    property1: function() {
        // this refers to the current object instance of the prototype
        // if function keyword is used to create the function
        return this
    }
})
```

### Defined types in the `global` scope

```typescript
declare global {
    interface Array<T> {
        property1(): Array
    }
}
```

## `String`

- `getDateFromISO()`

### `getDateFromISO()`

Gets date part (`YYYY-MM-DD`) of the `ISO` formatted date string.

```typescript
const date = new Date()
const iso = date.toISOString()

iso.getDateFromISO() // returns date in YYYY-MM-DD format
```

## `Array`

- `isEmpty()`
- `areEmpty()`
- `isNotEmpty()`
- `areNotEmpty()`

### `isEmpty()`

Returns `true` if the array is empty.

### `areEmpty()`

Alias for `isEmpty()`.

### `isNotEmpty()`

Negated `isEmpty()`.

### `areNotEmpty()`

Alias for `isNotEmpty()`

## `Number`

- `isBetween(x, y)`

### `isBetween(x, y)`

Returns true if the number is between specified number range (inclusive).

```typescript
const num = 2

num.isBetween(1, 3) // returns true
num.isBetween(3, 1) // returns true as well
```