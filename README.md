# Extensions for TypeScript / JavaScript

Extension methods for built-in objects in javascript with typescript support.

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
- `excluding(...items)`

### `isEmpty()`

Returns `true` if the array is empty.

#### Example

```typescript
const collection = []

collection.isEmpty() // returns true
[1].isEmpty() // returns false
```

### `areEmpty()`

Alias for `isEmpty()`.

#### Example

```typescript
const types = [1, 2, 3]

types.areEmpty() // returns true
```

### `isNotEmpty()`

Negated `isEmpty()`.

### `areNotEmpty()`

Alias for `isNotEmpty()`

### `excluding(...items)`

Returns an array without the specified items.

#### Example

```typescript
const arr = [1, 2, 3]

arr.excluding(2) // returns [1, 3]
arr.excluding(1, 3) // returns [2]
```

## `Number`

- `isBetween(x, y)`

### `isBetween(x, y)`

Returns true if the number is between specified number range (inclusive).

#### Example

```typescript
const num = 2

num.isBetween(1, 3) // returns true
num.isBetween(3, 1) // returns true as well
```

## Behind the scenes

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