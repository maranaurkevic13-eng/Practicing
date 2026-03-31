function createRarams(a, b){
    return a + b;
};
console.log(createRarams(2, 5));

// >>>>>>>>>>>>>>>>>>>>>>>>>>>

function maxEl(a, b, c) {
    return Math.max(a, b, c);
};
console.log(maxEl(2, 5, 1));

// >>>>>>>>>>>>>>>>>>>>>>>>>>

function firstElem(string) {
    return string[0];
};
console.log(firstElem('lira'));

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function lastElem(string) {
    return string[string.length - 1];
};
console.log(lastElem('milka'));

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function parityNumber(a) {
    if (a % 2 === 0) {
        return true;
    } else {
        return false;
    }
};
console.log(parityNumber(3));
console.log(parityNumber(4));

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function createNumber(a, b) {
    if (a === 0 || b === 0) {
        return null;
    } else {
        return a * b;
    }
};
console.log(createNumber(2, 4));
console.log(createNumber(0, 4));

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function strTeg(str) {
    return `<div>${str}</div>`;
};
console.log(strTeg('Welcome'));

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function strElem(elem) {
    const res = elem.trim();
    return res.split(" ").length;
};
console.log(strElem('hello world'));

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function createString(str) {
    return str.length * str.split(" ").length;
};
console.log(createString('Today is a wonderful day'));

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function vowelsEl(str) {
    const res = ['a', 'e', 'i', 'o', 'u'];
    let sum = 0;
    for (let string of str) {
        if (res.includes(string)) {
            sum++;
        }
    }
    return sum;
};
console.log(vowelsEl('marianna'));

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function joinArgs(...args) {
  return args.join(", ");
}
console.log(joinArgs("apple", "banana", "cherry")); 

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function multiplyAll(...numbers) {
  return numbers.reduce((product, num) => product * num, 1);
}
console.log(multiplyAll(2, 3, 4)); 

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function longestString(...strings) {
  let longest = strings[0];
  for (let str of strings) {
    if (str.length > longest.length) {
      longest = str;
    }
  }
  return longest;
}
console.log(longestString("apple", "banana", "cherry", "kiwi")); 
console.log(longestString("short", "longer", "longestStringHere")); 

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function numberStr(...str) {
    return str.join(" ");
};
console.log(numberStr('Hello', 'my', 'friends', '!'));