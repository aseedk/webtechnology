var Employee = /** @class */ (function () {
    function Employee(name, empCode) {
        this.name = name;
        this.empCode = empCode;
    }
    Employee.prototype.getSalary = function (empCode) {
        return 20000;
    };
    return Employee;
}());
var emp = new Employee("Steve", 1);
console.log(emp);
