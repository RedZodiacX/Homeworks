let arr1 = [1, 2, 3];
arr1.push(4);

let arr2 = [1, 2, 3, 4];
let lastElement = arr2.pop();

let arr3 = [1, 2, 3, 4];
let firstElement = arr3.shift();

let arr4 = [2, 3, 4];
arr4.unshift(1);

let arr5 = [1, 2];
let arr6 = [3, 4];
let combined = arr5.concat(arr6);

let arr7 = [1, 2, 3, 4];
let subArray = arr7.slice(1, 3);

let arr8 = [1, 2, 3, 4];
arr8.splice(1, 2, 'a', 'b');

let arr9 = [1, 2, 3];
arr9.forEach((element) => {
    console.log(element);
});

let arr10 = [1, 2, 3];
let squared = arr10.map((element) => element * 2);

let arr11 = [1, 2, 3, 4];
let even = arr11.filter((element) => element % 2 === 0);

let arr12 = [1, 2, 3, 4];
let sum = arr12.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

let arr13 = [1, 2, 3, 4];
let firstEven = arr13.find((element) => element % 2 === 0);

let arr14 = [1, 2, 3, 4];
let firstEvenIndex = arr14.findIndex((element) => element % 2 === 0);

let arr15 = [1, 2, 3, 4];
let hasTwo = arr15.includes(2);

let arr16 = [1, 2, 3, 4];
let index = arr16.indexOf(3);

let arr17 = [1, 2, 3, 4];
let str = arr17.join('-');

let arr18 = [1, 2, 3, 4];
arr18.reverse();

let arr19 = [3, 1, 4, 2];
arr19.sort();

let arr20 = [1, 2, 3, 4];
let hasEven = arr20.some((element) => element % 2 === 0);

let arr21 = [2, 4, 6];
let allEven = arr21.every((element) => element % 2 === 0);

let arr22 = [1, 2, 3, 4];
arr22.fill(0, 1, 3);

let arr23 = [1, [2, 3], [4, [5, 6]]];
let flattened = arr23.flat(2);

let arr24 = [1, 2, 3];
let mappedAndFlattened = arr24.flatMap((element) => [element * 2]); 