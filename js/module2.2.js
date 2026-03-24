for (let i = 1; i <= 10; i++){
    console.log(i);
};

// -------------------------------------

for (let i = 2; i <= 20; i += 2){
    console.log(i);
};

// ----------------------------------

let sum = 0;
for (let i = 1; i <= 100; i++){
    sum += i 
    console.log(sum);
};

// --------------------------------

let res = 7;
for (let i = 1; i <= 10; i++){
    console.log(`${res * i}`);
};

// -----------------------

const stringElem = "Hello world";
for (let i = 0; i < stringElem.length; i++){
    console.log(stringElem[i]);
};

// --------------------

for (let i = stringElem.length - 1; i >= 0; i--){
    console.log(stringElem[i]);
};

// -------------------------------------

for (let i = 0; i < stringElem.indexOf(' '); i++){
    console.log(stringElem[i]);
};

// ---------------------

const wordString = "JavaScript";
for (let i = 0; i < wordString.length; i += 2){
    console.log(wordString[i]);
}

// -----------------------------------------------

function stringEL(srting) {
    let res = '';
    for (let i = srting.length - 1; i >= 0; i--){
        res += srting[i];
    }
    return res;
};
console.log(stringEL(`Marianna`));

// ------------------------------------

function upperCaseString(string) {
    let res = '';
    for (let i = 0; i < string.length; i++){
        if (i % 2 === 1) {
            res += string[i].toUpperCase();
        }else {
          res += string[i];
        }
    }
    return res;
};
console.log(upperCaseString('natalia'));

// ------------------------------------------

function getString(str1, str2, count) {
    let res = str1;
    for (let i = 0; i < count; i++){
        res += str2
    }
    return res;
};
console.log(getString('Hello', ')', 5));