# Bitwise Operations in JavaScript

This repository contains JavaScript functions to perform various bitwise operations, including AND, OR, NOT, XOR, left shift, and right shift.

## Bitwise Operations Functions

### 1. Bitwise AND (`bitwiseAND`)

```javascript
function bitwiseAND(num, num2) {
    return num & num2;
}```

| A | B | A AND B |
|---|---|---------|
| 0 | 0 |   0     |
| 0 | 1 |   0     |
| 1 | 0 |   0     |
| 1 | 1 |   1     |



### 2. Bitwise OR (`bitwiseOR`)

```javascript
function bitwiseOR(num, num2) {
    return (num | num2);
}```

| A | B | A OR B |
|---|---|--------|
| 0 | 0 |   0    |
| 0 | 1 |   1    |
| 1 | 0 |   1    |
| 1 | 1 |   1    |



### 3. Bitwise XOR (`bitwiseXOR`)

```javascript
function bitwiseXOR(num, num2) {
    return (num | num2);
}```

| A | B | A OR B |
|---|---|--------|
| 0 | 0 |   0    |
| 0 | 1 |   1    |
| 1 | 0 |   1    |
| 1 | 1 |   0    |



### 4. Bitwise NOT (`bitwiseNOT`)

```javascript
function bitwiseNOT(num) {
    return (~num);
}```

Inverts all the bits

### 5. Bitwise Zero fill left shift (`bitwisebitwiseLeftShift`)

```javascript
function bitwiseLeftShift(num, num2) {
    return (num << num2);
}```

Shifts left by pushing zeros in from the right and let the leftmost bits fall off


### 6. Bitwise Zero fill left shift (`bitwisebitwiseLeftShift`)

```javascript
function bitwiseLeftShift(num, num2) {
    return (num >> num2);
}```

Shifts right by pushing copies of the leftmost bit in from the left, and let the rightmost bits fall off