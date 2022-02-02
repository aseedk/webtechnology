interface IEmployee {
    empCode: number;
    name: string;
    getSalary:(empCode: number) => number;
}

class Employee implements IEmployee{
    name: string;
    empCode: number;

    constructor(name: string, empCode: number) {
        this.name = name;
        this.empCode = empCode;
    }

    getSalary(empCode: number): number {
        return 20000;
    }
}

let emp = new Employee("Steve", 1);
console.log(emp);
