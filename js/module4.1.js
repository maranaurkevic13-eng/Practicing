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

const libraryCatalog = {
    books: [],

    addBook(book) {
        this.books.push(book);
    },

    findBookByAuthor(author) {
        return this.books.filter(b => b.author === author);
    },

    listBook() {
        this.books.forEach(b => {
            console.log(`${b.title} - ${b.author}`)
        })
    },
};
libraryCatalog.addBook({ title: "Місто", author: "Валерян Підмогильний"});
libraryCatalog.addBook({ title: "Кобзар", author: "Тарас Шевченко"});
libraryCatalog.addBook({ title: "Захар Беркут", author: "Іван Франко" });

console.log(libraryCatalog.findBookByAuthor('Тарас Шевченко'));
libraryCatalog.listBook();

// ------------------------------

const shoppingCart = {
    items: [],

    addItem(item) {
        this.items.push(item);
    },

    totalCost() {
        return this.items.reduce((total, item) => total + item.price, 0);
    },

    listItems() {
        this.items.forEach(i => {
            console.log(`${i.name}`);
        });
    },
};
shoppingCart.addItem({ name: 'Ваза', price: 150 });
shoppingCart.addItem({ name: 'Рушник', price: 50 });
shoppingCart.addItem({ name: 'Кружка', price: 200 });
shoppingCart.listItems();
console.log("Загальна вартість:", shoppingCart.totalCost());

// --------------------------------------

const socialNetworkUser = {
    username: 'Max',
    friends: [],

    addFriend(friendName) {
        this.friends.push(friendName);
    },

    removeFriend(friendName) {
        this.friends = this.friends.filter(f => f !== friendName);
    },

    listFriends() {
        console.log('Саписок друзів: ')
        this.friends.forEach(f => {
            console.log(f)
        })
    }
};
socialNetworkUser.addFriend("Max");
socialNetworkUser.addFriend("Lilia");
socialNetworkUser.addFriend("Ivan");
socialNetworkUser.listFriends();
socialNetworkUser.removeFriend("Lilia");
socialNetworkUser.listFriends();

// -------------------------------

const musicPlayer = {
    songs: [],
    currentSongs: 0,

    addSongs(song) {
        this.songs.push(song);
    },

    play() {
        console.log(`Відтворюється: ${this.songs[this.currentSongs]}`);
    },

    pause() {
        console.log(`Пауза: ${this.songs[this.currentSongs]}`);
    },

    next() {
        this.currentSongs = (this.currentSongs + 1) % this.songs.length;
        this.play();
    },

    previouse() {
        this.currentSongs =
            (this.currentSongs - 1 + this.songs.length) % this.songs.length;
        this.play();
    }
};
musicPlayer.addSongs("Hate you");
musicPlayer.addSongs("Love");
musicPlayer.addSongs("Star boy");

musicPlayer.play();       
musicPlayer.next();       
musicPlayer.next();       
musicPlayer.previouse();   
musicPlayer.pause();     