function Sum(x:number, y:number) {
    return x + y;
}

console.log(Sum(2,3));

let Sum1 = function (x:number, y:number): number {
    return x+y;
}

console.log(Sum1(2,3));

function Greet(greeting:string, name?: string):string {
    return greeting + " " + name + "!";
}

console.log(Greet('Hello', 'Steve'));
console.log(Greet('Hi'));
console.log(Greet('Bill'));

function Greet1(name: string, greeting: string = "Hello") : string {
    return greeting + ' ' + name + '!';
}

console.log(Greet1('Steve'));
console.log(Greet1('Steve','Hi'));
console.log(Greet1('Bill'));

function addNumbers(...nums:number[]) {
    let sum:number = 0;
    for (let i = 0; i <nums.length;i++){
        sum += nums[i];
    }
    console.log("Sum of the numbers: ", sum);
}
addNumbers(1,2,3)
addNumbers(10,10,10,10,10);
