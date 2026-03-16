function stringElem(str1, str2) {
    if (!str1 || !str2) {
        return false;
    };

    const secondElem = str1[0];
    const firstElem = str2[str2.length -1];
    return firstElem === secondElem;
};
console.log(stringElem('marianna', 'maksimilian'));
console.log(stringElem('natalia', 'marian'));
 
// TASK 2----------------------------------------

function stringEl(str1, str2) {
    if (!str1 || !str2) {
        return false;
    };
    const firstEl = str1[0];
    const secondEl = str2[0];
    return firstEl === secondEl;
};
console.log(stringEl('marianna', 'maksimilian'));
console.log(stringEl('natalia', 'marian'));

// TASK 3--------------------------------------

function lengthEl(str1, str2) {
    if (!str1 || !str2) {
        return false;
    };
    
    const firstLength = str1.length;
    const secondLength = str2.length;
    return firstLength === secondLength;
};
console.log(lengthEl('songs', 'music'));
console.log(lengthEl('rose', 'books'))

// TASK 4---------------------------------------- 

function numberEl(num) {
    const string = String(num);
    return string.length % 2 === 0;
};
console.log(numberEl(24));
console.log(numberEl(123));

// TASK 5-------------------------------------------

function numder(num1, num2) {
    return num1 > num2;
};
console.log(numder(5, 7));
console.log(numder(24, 10));

// TASK 6 -------------------------------------

function numberElements(num1, num2) {
    return num1 % num2 === 0;
};
console.log(numberElements(10, 5));
console.log(numberElements(3, 2));

// TASK 7 -------------------------------------------

function numbersEl(num) {
    return num % 2 !== 0; 
};
console.log(numbersEl(3));
console.log(numbersEl(2));

// TASK 8 -------------------------------------

function wordsEl(str) {
    if (!str) {
        return false;
    }
    return str !== str.toLowerCase();
};
console.log(wordsEl('Sofia'));
console.log(wordsEl('marianna'));

// TASK 9 -------------------------------------------

function lengthString(str1, str2) {
    return str1.length > str2.length;
};
console.log(lengthString('marianna', 'natali'));
console.log(lengthString('marianna', 'maksimilian'));

// TASK 10 -----------------------------------------

function extraElem(str) {
    if (!str) {
        return false;
    }
    return str !== str.trim();
};
console.log(extraElem(' marianna'));
console.log(extraElem('book'));

// TASK 11 -------------------------------------------------

function reverseEl(str) {
    if (!str) {
        return false;
    };
    return str === str.split("").reverse().join("");
};
console.log(reverseEl('lol'));
console.log(reverseEl('songs'));