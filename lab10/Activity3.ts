let fruits:string[] = ['Apple', 'Orange', 'Banana'];
let fruitsCopy:string[] = ['Apple', 'Orange', 'Banana'];

for (const fruitsKey in fruits) {
    console.log(fruits[fruitsKey]);
}

for (let i = 0; i < fruitsCopy.length; i++){
    console.log(fruitsCopy[i]);
}

enum PrintMedia {
    Newspaper,
    Newsletter,
    Magazine,
    Book
}

console.log(PrintMedia);
let empId: string|number;
empId = 111;
empId = "E111";
