function sumArray(numbers, callback) {
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  callback(sum);
};
sumArray([1, 2, 3, 4, 5], function(result) {
  console.log("Сума чисел:", result);
});

// TASK 2

function doubleArray(numbers, callback) {
  const sum = numbers.map(function (num) {
    return num * 2;
  })
  callback(sum);
};
doubleArray([1, 2, 3, 4, 5], function (result) {
  console.log("Подвоєний масив:", result);
})

// TASK 3

function filterWords(words, condition, callback) {
  const filter = words.filter(function(wordsEl) {
    return condition(wordsEl);
  })
  callback(filter)
};
const words = ["apple", "banana", "cherry", "date", "kiwi"];

function isLongWord(word) {
  return word.length > 5;
}

filterWords(words, isLongWord, function (result) {
  console.log("Відфільтровані слова:", result)
})

// TASK 4

function capitalizeStrings(strings, callback) {
  const capitalize = strings.map(function (word) {
    return word[0].toUpperCase() + word.slice(1)
  })
  callback(capitalize);
};
const word = ["apple", "banana", "cherry", "date"];

capitalizeStrings(words, function (result) {
  console.log("Капіталізовані рядки:",result)
})

// TASK 5

function sortNumbers(numbers, callback) {
  const sorted = numbers.toSorted((a, b) => a - b);
  callback(sorted);
};
const number = [21, 6, 35, 67, 1];
sortNumbers(number, function (result) {
  console.log('За зростанням:', result)
})

// TASK 6

function findMax(numbers, callback) {
  const max =  Math.max(...numbers);
  callback(max);
};
const numbers = [3, 6, 67, 99];
findMax(numbers, function (result) {
  console.log('Максимальне:', result)
})

// TASK 7
function checkEven(numbers, callback) {
  const parity = numbers.every(function (num) {
    if (num % 2 === 0) {
      return true;
    }
  })
  callback(parity)
}
const num = [2, 4, 6, 8];
checkEven(num, function (result) {
  console.log('Всі парні:', result);
})

// TASK 8

function concatStrings(strings, separator, callback) {
  const result = strings.join(separator);
  callback(result)
}
const string = ["apple", "banana", "cherry"];
concatStrings(string, ' - ', function (result) {
  console.log("Об'єднаний рядок:", result)
})

// TASK 9

function parseNumbers(strings, callback) {
  const numbers = strings.map(function(str) {
    return Number(str);
  });
  callback(numbers);
}
parseNumbers(["10", "20", "30"], function(result) {
  console.log("Масив чисел:", result);
});

// TASK 10

function countCharacters(strings, callback) {
  const total = strings.reduce(function(acc, str) {
    return acc + str.length;
  }, 0);
  callback(total);
}
countCharacters(["apple", "banana", "cherry"], function(result) {
  console.log("Загальна кількість символів:", result);
});
