function sumArray(numbers, callback) {
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  callback(sum);
};
sumArray([1, 2, 3, 4, 5], function(result) {
  console.log("Сума чисел:", result);
});
