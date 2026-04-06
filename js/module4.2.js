const obj = {
    firstName: 'Lilia',
    lastName: 'Petrenko',
    age: 21,

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    },

    incrementAge() {
        this.age += 1;
        return this.age;
    }
};
console.log(obj.getFullName());
console.log(obj.incrementAge());


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const bankSystem = {
    bankName: 'Lilia',
    accountNumber: 1,
    balace: 155,

    deposite(sum) {
        return this.balace += sum;
    },

    withdrew(sum) {
        if (sum > this.balace) {
            return `Не вистарчає коштів`;
        }
        return this.balace -= sum;
    }
};
console.log(bankSystem.deposite(50));
console.log(bankSystem.withdrew(30));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const statusEl = {
    name: 'Vova',
    position: 'Будівельник',
    salary: 60000,

    getInfo() {
        return `${this.name} працює на позиції ${this.position} із зарплатою ${this.salary}`;
    },
};
console.log(statusEl.getInfo());

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const countryStatus = {
    countryName: 'Italy',
    capital: 'Rome',
    population: 58990000,

    getDetails() {
        return `Країна: ${this.countryName}, столиця: ${this.capital}, населення: ${this.population}`;
    },
};
console.log(countryStatus.getDetails());

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const result = {
    itemName: 'Max',
    quantity: 20,
    priceItem: 30,

    calculateTotalPrice() {
        return this.quantity * this.priceItem;
    },
};
console.log(`Total cost:`, result.calculateTotalPrice());

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const checkStatus = {
    email: 'bear12@gmail.com',
    password: 'bear123',

    checkLogin(email, password) {
       return this.email === email && this.password === password;
    },
};
console.log(checkStatus.checkLogin('cat12@gmail.com', 'cat123'));
console.log(checkStatus.checkLogin('bear12@gmail.com', 'bear123'));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const road = {
    vehicleType: 'Car',
    fuelType: "Petrol",
    fuelEfficiency: 8,

    calculateRange(fuelAmount) {
        return this.fuelEfficiency * fuelAmount;
    },
};
console.log(road.calculateRange(16));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const students = {
    studentsName: 'Max',
    grade: 9,
    subject: 'Англійська мова',

    upgradeGrade() {
        return this.grade += 1;
    },

    getReport() {
        return `${this.studentsName} має оцінку ${this.upgradeGrade()} з предмету ${this.subject}`;
    },
};
console.log(students.getReport());