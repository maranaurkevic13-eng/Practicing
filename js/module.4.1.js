const person = {
    name: 'Lilia',
    age: 19,
    profesion: 'Voleyball player',
};
console.log('Name:', person.name);


person.age = 20;
console.log('New age:', person.age);


person.placeWork = 'Lviv';
console.log('Place of work:', person.placeWork); 


delete person.placeWork;
console.log(person);


const friend = {
    nameEl: 'Max',
    ageEl: 17,
    profesionEl: 'Voleyball player',
};


const combine = { ...person, ...friend };
console.log(combine);


for (const key in person) {
    console.log(key + ': ' + person[key]);
}


const keys = Object.keys(person);
console.log(keys);

// -------------------------

function createPerson(name, age) {
    return {
        name: name,
        age: age,
    };
};
console.log(createPerson('Ira', 23));

// --------------------------

function createAddress(friend, address) {
    friend.address = address;
    return friend;
};
console.log(createAddress(friend, 'Lviv'));

// -----------------------------

function newAge(friend, age) {
    friend.ageEl = age;
    return friend;
};
console.log(newAge(friend, 18));

// --------------------------------

function removeAge(friend) {
    delete friend.ageEl;
    return friend;
};
console.log(removeAge(friend));

// -----------------------------

function showName(friend) {
    return friend.nameEl;
};
console.log(showName(friend));

// -----------------------------------

function searchesEl(friend) {
    if (friend.address) {
        return true;
    } else {
        return false;
    }
};
console.log(searchesEl(friend));

// --------------------------------

function newValues(friend, newName, newAge) {
    friend.nameEl = newName;
    friend.ageEl = newAge;
    return friend;
};
console.log(newValues(friend, 'Maxim', 19));

// ----------------------------------------

function ageString(friend) {
    friend.ageEl = String(friend.ageEl);
    return friend;
};
console.log(ageString(friend));

// -----------------------------

function massegeEl(friend) {
    return `User ${friend.nameEl} from ${friend.address}!`
};
console.log(massegeEl(friend));

// -----------------------------------

const contactBook = {
    contacts: [],

    addContact(contact){
       this.contacts.push(contact);
    },
    
    deleteContact(contactName) {
        this.contacts = this.contacts.filter(c => c.name !== contactName);
    },

    findContact(contactName) {
        this.contacts.find(c => c.name === contactName) || null;
    },
};
contactBook.addContact({ name: 'Max', city: 'Lviv' });
contactBook.addContact({ name: 'Lilia', city: 'Lviv' });
console.log(contactBook.contacts);

contactBook.deleteContact('Max');
console.log(contactBook.contacts);

// --------------------------------------

const rectangle = {
    width: 4,
    heigth: 2,

    area() {
        return this.width * this.heigth;
    },

    perimeter() {
        return 2 * (this.width * this.heigth);
    }
};
console.log('Area: ', rectangle.area());
console.log('Perimeter: ', rectangle.perimeter());

// ----------------------------------------------

const toDoList = {
    tasks: [],
    
  addTask(task) {
    this.tasks.push({ name: task, done: false });
  },

  markAsDone(taskName) {
    const task = this.tasks.find(t => t.name === taskName);
    if (task) {
      task.done = true;
    }
  },

  listTasks() {
    this.tasks.forEach(t => {
      console.log(`${t.name} - ${t.done ? "Виконано" : "He виконано"}`);
    });
  }
};

toDoList.addTask("Вивчити JavaScript");
toDoList.addTask("Зробити домашнє завдання");
toDoList.addTask("Піти на тренування");

toDoList.markAsDone("Зробити домашнє завдання");

toDoList.listTasks();

// ---------------------------------------------

const bankAcount = {
    balance: 100,

    deposite(amount) {
        this.balance += amount;
        console.log(`Внесено: ${amount}`)
    },

    withdraw(amount) {
        this.balance -= amount;
        if (this.balance >= amount) {
            console.log(`Знято ${amount}. Новий баланс: ${this.balance}`);
         } else {
            return `Недостатньо коштів`;
        }
    },

    checkBalance() {
        return this.balance;
    }
};

bankAcount.deposite(200);
bankAcount.withdraw(50);
console.log(bankAcount.checkBalance());

// --------------------------------

// const libraryCatalog = {
//     books: [],

//     addBook(book) {
//         this.books.push);
//     },

//     findBookByAuthor(author) {
        
//     }
// }