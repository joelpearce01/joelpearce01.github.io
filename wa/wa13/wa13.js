//Problem 1
employees = []

class Employee {
    constructor(name, department, designation, salary, raiseEligible) {
        this.firstName = name;
        this.department = department;
        this.designation = designation;
        this.salary = parseInt(salary);
        this.raiseEligible = raiseEligible;
    }
}

let sam = new Employee("Sam", "Tech", "Manager", 40000, true);
let mary = new Employee("Mary", "Finance", "Trainee", 18500, true);
let bill = new Employee("Bill", "HR", "Executive", 21200, false);

employees.push(sam);
employees.push(mary);
employees.push(bill);

console.log(employees);

// Problem 2

class Company {
    constructor(name, website, array) {
        this.name = name;
        this.website = website;
        this.array = array;
    }
};

let techstars = new Company("Tech Stars", "www.techstars.site", employees);

console.log(techstars);

// Problem 3

let anna = new Employee("Anna", "Tech", "Executive", 25600, false);

employees.push(anna);

console.log(employees);

// Problem 4

function totalSalary(company) {
    var totalmoney = 0;

    for (let i = 0; i < company.array.length; i++) {
        totalmoney += company.array[i].salary;
    }

    return totalmoney;
};

let problem4 = totalSalary(techstars);
console.log("Total Salary Expenses:", problem4);

// Problem 5

function raiseSalary(company) {
    for (let i = 0; i < company.array.length; i++) {
        let employee = company.array[i];

        if (employee.raiseEligible === true) {
            employee.salary = employee.salary * 1.1;
            employee.raiseEligible = false;
        }
    }

    return company.array;
}

console.log(raiseSalary(techstars));
console.log("Total again:", totalSalary(techstars));

// Problem 6

let workingfromHome = ['Anna', 'Sam'];

function workfromHome(company, remoteWorkList) {
    for (let i = 0; i < company.array.length; i++) {
        let employee = company.array[i];

        if (remoteWorkList.includes(employee.firstName)) {
            employee.wfh = true;
        } else {
            employee.wfh = false;
        }
    };

    return company.array;
}

console.log(workfromHome(techstars, workingfromHome));