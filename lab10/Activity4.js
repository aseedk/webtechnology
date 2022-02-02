function Sum(x, y) {
    return x + y;
}
console.log(Sum(2, 3));
var Sum1 = function (x, y) {
    return x + y;
};
console.log(Sum1(2, 3));
function Greet(greeting, name) {
    return greeting + " " + name + "!";
}
console.log(Greet('Hello', 'Steve'));
console.log(Greet('Hi'));
console.log(Greet('Bill'));
function Greet1(name, greeting) {
    if (greeting === void 0) { greeting = "Hello"; }
    return greeting + ' ' + name + '!';
}
console.log(Greet1('Steve'));
console.log(Greet1('Steve', 'Hi'));
console.log(Greet1('Bill'));
function addNumbers() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var sum = 0;
    for (var i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    console.log("Sum of the numbers: ", sum);
}
addNumbers(1, 2, 3);
addNumbers(10, 10, 10, 10, 10);
