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

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const users = {
    username: 'Max',
    isOnline: true,

    toggleStatus() {
        return !this.isOnline;
    }
};
console.log(users.toggleStatus());

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const dataStatus = {
    day: 21,
    month: 3,
    year: 2021,

    formatDate() {
        const dd = String(this.day).padStart(2, '0');
        const mm = String(this.month).padStart(2, '0');
        const yyyy = String(this.year);
        
        return `${dd}/${mm}/${yyyy}`;
    }
};
console.log(dataStatus.formatDate());

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const colorCheck = {
    colorName: 'pink',
    isPrimary: true,

    checkPrimary() {
        const baseColor = ['red', 'blue', 'yellow'];
        if (baseColor.includes(this.colorName)) {
            return true;
        } else {
            return `This is not a base color`;
        }
    }
};
console.log(colorCheck.checkPrimary());

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const songsElem = {
    songName: 'Sorry',
    artist: 'Jastin Biber',
    duration: 2,

    getSongsInfo() {
        return `Songs "${this.songName}" by ${this.artist}, ${this.duration} minutes`;
    }
};
console.log(songsElem.getSongsInfo());

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const userLevel = {
    username: 'Max',
    level: 45,

    levelUp() {
        return this.level += 1;
    },

    getUserInfo() {
        return `${this.username}, Level: ${this.levelUp()}`
    }
};
console.log(userLevel.getUserInfo());

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const lengthStatus = {
    length: 3,
    width: 3,

    isSquare() {
        if (this.length === this.width) {
            return true;
        } else {
            return false;
        }
    }
};
console.log(lengthStatus.isSquare());

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const discountStatus = {
    name: 'Laptop',
    price: 21000,

    discount(percent) {
        const percentResult = (this.price * percent) / 100;
        return `Current price: ${this.price - percentResult}`;
    }
};
console.log(discountStatus.discount(10));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const weigthObj = {
    weigth: 70,

    convertToPounds() {
        const kgToPounds = 2.20462;
        return this.weigth * kgToPounds;
    }
};
console.log(weigthObj.convertToPounds());

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const emailContains = {
    email: 'maximbear13',
    
    isGmail() {
        if (this.email.includes('@gmail.com')) {
            return true;
        } else {
            return false;
        }
    }
};
console.log(emailContains.isGmail());

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const numberResult = {
    x: 3,
    y: 4,

    calculateDistance() {
        return Math.sqrt(this.x ** 2 + this.y ** 2);
    }
};
console.log(numberResult.calculateDistance());

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const catalogElem = {
    products: [],

    addProducts(name, price, quantity) {
        const productsEl = { name, price, quantity };
        return this.products.push(productsEl);
    },

    removeProducts(nameProducts) {
        return this.products = this.products.filter(product => product.name !== nameProducts);
    },

    totalQuantity() {
        return this.products.reduce((total, product) => {
            return total + product.price * product.quantity;
        }, 0);
    }
};
catalogElem.addProducts("Laptop", 20000, 2);
catalogElem.addProducts("Phone", 10000, 3);
catalogElem.addProducts("Headphones", 2000, 5);
console.log(catalogElem.products);
console.log("Загальна вартість:", catalogElem.totalQuantity()); 
catalogElem.removeProducts("Phone");
console.log(catalogElem.products);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const user = {
  name: "Marianna",
  email: "test@example.com",
  password: "12345",

  checkPassword(inputPassword) {
    return this.password === inputPassword;
  }
};

console.log(user.checkPassword("12345"));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const book = {
  title: "JavaScript Basics",
  author: "John Doe",
  year: 2024,
  read: false,

  markAsRead() {
    this.read = true;
  },

  getStats() {
    return this.read ? "Прочитано" : "Не прочитано";
  }
};

book.markAsRead();
console.log(book.getStats()); 

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const character = {
  name: "Warrior",
  level: 5,
  health: 100,
  attackPower: 20,

  attack(enemy) {
    enemy.health -= this.attackPower;
    return `${this.name} атакує ${enemy.name}, у нього залишилось ${enemy.health} HP`;
  },

  heal(amount) {
    this.health += amount;
    return `${this.name} відновив ${amount} HP, тепер має ${this.health}`;
  }
};

const enemy = { name: "Goblin", health: 50 };
console.log(character.attack(enemy));
console.log(character.heal(30));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const contacts = {
  list: [],

  addContact(name, phone, email) {
    this.list.push({ name, phone, email });
  },

  removeContact(name) {
    this.list = this.list.filter(contact => contact.name !== name);
  },

  findContact(name) {
    return this.list.find(contact => contact.name === name);
  }
};

contacts.addContact("Taras", "123456789", "taras@example.com");
console.log(contacts.findContact("Taras"));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const calendar = {
  events: [],

  addEvent(title, date, place, note) {
    this.events.push({ title, date, place, note });
  },

  removeEvent(title) {
    this.events = this.events.filter(event => event.title !== title);
  },

  viewEvents(date) {
    return this.events.filter(event => event.date === date);
  }
};

calendar.addEvent("Meeting", "2026-04-15", "Lviv", "Project discussion");
console.log(calendar.viewEvents("2026-04-15"));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const shop = {
  cart: [],

  addToCart(product) {
    this.cart.push(product);
  },

  calculateTotal() {
    return this.cart.reduce((sum, item) => sum + item.price, 0);
  },

  checkout() {
    return `Замовлення оформлено. Сума: ${this.calculateTotal()} грн`;
  }
};

shop.addToCart({ name: "Laptop", price: 20000 });
shop.addToCart({ name: "Phone", price: 10000 });
console.log(shop.checkout());

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const account = {
  name: "Marianna",
  balance: 1000,
  transactions: [],

  deposit(amount) {
    this.balance += amount;
    this.transactions.push({ type: "deposit", amount });
  },

  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      this.transactions.push({ type: "withdraw", amount });
    } else {
      console.log("Недостатньо коштів");
    }
  },

  getHistory() {
    return this.transactions;
  }
};

account.deposit(500);
account.withdraw(300);
console.log(account.balance); 
console.log(account.getHistory());
