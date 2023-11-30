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