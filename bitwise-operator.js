function bitwiseAND(num, num2) {
    return (num & num2);
}
function bitwiseOR(num, num2) {
    return (num | num2);
}
function bitwiseNOT(num) {
    return (~num);
}
function bitwiseXOR(num, num2) {
    return (num ^ num2);
}
function bitwiseLeftShift(num, num2) {
    return (num << num2);
}
function bitwiseRightShift(num, num2) {
    return (num >> num2);
}

let num1 = 5; // 0101
let num2 = 2; // 0010

console.log(`${num1} & ${num2} = ${bitwiseAND(num1, num2)}`); // 0000 = 0
console.log(`${num1} | ${num2} = ${bitwiseOR(num1, num2)}`); // 0111 = 7
console.log(`${num1} = ${bitwiseNOT(num1)}`); // 1010 = -6
console.log(`${num1} ^ ${num2} = ${bitwiseXOR(num1, num2)}`); // 0111 = 7
console.log(`${num1} << ${num2} = ${bitwiseLeftShift(num1, num2)}`); // 010100 = 20
console.log(`${num1} >> ${num2} = ${bitwiseRightShift(num1, num2)}`); // 000001 = 1