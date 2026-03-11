const firstName = "Marianna";
const lastName = "Yurkevich";
const fullName = `${firstName} ${lastName}`;
console.log(fullName);




const radius = 5;
const π = 3.14;
const area = π * radius**2;
console.log(area);




const someStringEl = "mylove";
console.log(someStringEl.length)




const someString = "kocham";
const firstLetter = someString;
const lastLetter = someString.length-1;
console.log(firstLetter[0]);
console.log(someString[lastLetter]);



const str1 = "Marianna";
const str2 = "Maksumilian";
const res1 = str1[str1.length - 1];
const res2 = str2[str2.length - 1];
const sumResult = res1 + res2;
console.log(sumResult)



const userValue = 24;
const string = String(userValue);
const sum = string.length;
const res = userValue * 5 ** sum;
console.log(res)


const apples = 47;
const grapes = 135;
const total = apples + grapes;
console.log(total)
const diff = grapes - apples ;
console.log(diff)



const companyName = "Cyberdyne Systems";
const repairBots = 150;
const defenceBots = 50;
const message = `${companyName} has ${repairBots + defenceBots} bots in stock`;
console.log(message); 