var fruits = ['Apple', 'Orange', 'Banana'];
var fruitsCopy = ['Apple', 'Orange', 'Banana'];
for (var fruitsKey in fruits) {
    console.log(fruits[fruitsKey]);
}
for (var i = 0; i < fruitsCopy.length; i++) {
    console.log(fruitsCopy[i]);
}
var PrintMedia;
(function (PrintMedia) {
    PrintMedia[PrintMedia["Newspaper"] = 0] = "Newspaper";
    PrintMedia[PrintMedia["Newsletter"] = 1] = "Newsletter";
    PrintMedia[PrintMedia["Magazine"] = 2] = "Magazine";
    PrintMedia[PrintMedia["Book"] = 3] = "Book";
})(PrintMedia || (PrintMedia = {}));
console.log(PrintMedia);
var empId;
empId = 111;
empId = "E111";
