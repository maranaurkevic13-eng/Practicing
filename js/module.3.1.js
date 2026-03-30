function arrElem(arr) {
    for (const element of arr) {
        console.log(element);
    }
};
arrElem(["apple", "banana", "cherry"]);

// ========================================

function createelem(arr) {
    for (let elems of arr) {
        if (elems.length % 2 === 0) {
            console.log(elems);
        }
    }
};
createelem(['book', 'music', 'romantic', 'relax']);

// =========================================

function createNumber(arr) {
    for (let number of arr) {
        if (number % 2 === 0) {
             console.log(number)
         }
     }
};
createNumber([1, 2, 3, 4, 5, 6]);

// ===============================================

function maxNumber(arr, max) {
    for (let number of arr) {
        if (number > max) {
            console.log(number)
        }
    }
};
maxNumber([1, 2, 3, 4, 5], 3);

// ==================================

function sumArr(arr) {
    let sum = 0;
    for (let number of arr) {
        sum += number;
    }
    return sum;
};
console.log(sumArr([1, 2, 3, 4, 5]));

// =========================================

function createElemsIndex(arr, elem) {
    let sum = 0;
    for (let number of arr) { 
        if (number === elem) {
            sum++
       }
    }
    return sum;
};
console.log(createElemsIndex([1, 2, 3, 2, 4, 2, 5], 2)); 
console.log(createElemsIndex(["apple", "banana", "apple", "cherry"], "apple"));

// =========================================================

function removeElem(arr) {
    let res = [];
    for (let number of arr) {
        if (number >= 0) {
            res.push(number);
        }
    }
    return res;
};
console.log(removeElem([1, 2, 3, -3, 0, -2, 6]));

// =======================================

function srtingElem(arr) {
    let result = [];
    for (let string of arr) {
        if (string.length <= 6) {
            result.push(string.toLowerCase());
        } else {
            result.push(string.toUpperCase());
        }
    }
    return result;
};
console.log(srtingElem(["books", "music", "romantic", "relaxing", "fun"]));

// ============================================

function createNumbers(arr) {
    let res = [];
    for (let number of arr) {
        if (number % 2 !== 0) {
            res.push(number);
        }
    }
    return res;
};
console.log(createNumbers([1, 2, 3, 4, 5, 6]));

// ====================================

function numberElems(arr) {
    let result = [];
    for (let num of arr) {
        if (num % 3 === 0) {
            result.push(num);
        }
    }
    return result;
};
console.log(numberElems([1, 3, 5, 9, 6]));

// ===================================

function includesElem(arr1, arr2) {
    let res = [];
    for (let num of arr1){
        if (arr2.includes(num)) {
            res.push(num);
        }
    }
    return res;
};
console.log(includesElem([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));

// ==============================================

function createArrElem(arr1, arr2) {
    let res = [];
    for (let number of arr1) {
        if (!arr2.includes(number)) {
            res.push(number)
        }
    }
    return res;
};
console.log(createArrElem([1, 2, 3, 4, 5], [3, 4, 6, 7]));

// =========================================

function numberMinElem(arr) {
        const res = Math.min(...arr)
        console.log(res);
};
numberMinElem([4, 6, 8, 9, 2]);

// =========================================

function createNumbersEl(arr) {
    let res = [];
    for (let number of arr) {
        if (number % 2 === 0) {
            res.unshift(number);
        } else {
            res.push(number);
         }
    }
    return res;
};
console.log(createNumbersEl([1, 2, 3, 4, 5, 6]));

// =========================================

function sumArrEl(arr) {
    let res = [];
    let sum = 0;
    for (let number of arr) {
        sum += number;
        res.push(sum)
    }
    return res;
};
console.log(sumArrEl([1, 2, 3, 4, 5]));

// =================================================

