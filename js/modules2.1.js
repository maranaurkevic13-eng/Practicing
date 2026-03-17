function nightClub(age, balance) {
    if (age > 18 && balance > 100) {
        return `Welcome`;
    } else {
        return `Goodbye`;
    };
};
console.log(nightClub(17, 50));
console.log(nightClub(21, 500));

// --------------TASK 2---------------

function shopGoods(amount, price) {
    const sum = amount + price;
    if (sum < 1000) {
        return `Ми це купуємо`;
    } else {
        return `Це занадто дорого`;
    }
};
console.log(shopGoods(550, 755));
console.log(shopGoods(250, 175));

// ----------------TASK 3--------------

function temperatureCelc(temp) {
    if (temp < 0) {
        return `Замерзає`;
    } else if(temp > 0 && temp < 25) {
        return `Нормальна температура`;
    } else {
        return `Спекотно`;
    }
};
console.log(temperatureCelc(-2));
console.log(temperatureCelc(5));
console.log(temperatureCelc(35));

// ------------------ TASK 4-----------

function numberEl(number, divisor) {
    if (number % divisor === 0) {
        return `Ділиться`;
    } else {
        return `He ділиться`;
    }
};
console.log(numberEl(10, 2));
console.log(numberEl(20, 3));

// ---------------TASK 5------------

function rainSituation(isRaining, hasUmbrella) {
    if (isRaining && hasUmbrella) {
        return `He змокнеш`;
    } else if (isRaining) {
        return `Змокнеш`;
    } else {
        return `Без дощу`;
    }
};
console.log(rainSituation('Raining', 'hasUmbrella'));
console.log(rainSituation('Raining'));
console.log(rainSituation());

// -------------TASK 6---------------

function studentGrade(grade) {
    if (grade >= 90) {
        return `Відмінно`;
    } else if (grade >= 75) {
        return `Добре`;
    } else if (grade >= 50) {
        return `Задовільно`;
    } else {
        return `Незадовільно`; 
    }
};
console.log(studentGrade(96));
console.log(studentGrade(76));
console.log(studentGrade(49));

// ---------------TASK 7 -----------------

function daysNumber(dayOfWeek, isHoliday) {
    if (dayOfWeek === 'Saturday' || dayOfWeek === 'Sunday' || isHoliday === true) {
        return `Вихідний`;
    } else {
        return `Робочий день`;
    }
};
console.log(daysNumber('Saturday'));
console.log(daysNumber('Monday'));

// ------------------TASK  8--------------------

function yearEl(year) {
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        return `Високосний рік`;
    } else {
        return `Звичайний рік`;
    }
};
console.log(yearEl(2024));
console.log(yearEl(2023));

// -------------------TASK 9------------------

function createEl(hasInvitation, isFriend) {
    if (hasInvitation && isFriend) {
        return `Ви запрошені`;
    } else {
        return `Вхід заборонено`;
    }
};
console.log(createEl('Маю запрошення'));
console.log(createEl());

// ------------------------TASK 10--------------

function peopleAge(age) {
    if (age < 12) {
        return `Дитина`;
    } else if(age > 12 && age < 18) {
        return `Підліток`;
    } else if (age > 18 && age < 60) {
        return `Дорослий`;
    } else {
        return `Пенсіонер`;
    }
};
console.log(peopleAge(15));
console.log(peopleAge(66));

// ------------------TASK 11----------------

// function systemEl(isLoggedIn, hasAdminRights) {
    
// }