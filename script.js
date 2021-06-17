// 'use strict';

// // const convertTitleCase = (title) => {
// //     const exceptions = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with', 'is'];
// //     const titleCase = title.toLowerCase().split(' ').map(word => exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1));

// //     return titleCase.join(' ');
// // }

// // console.log(convertTitleCase('this is a nice title'));


// // Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
// // Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
// // Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

// // 1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property.Do NOT create a new array, simply loop over the array.Forumla: recommendedFood = weight ** 0.75 * 28.(The result is in grams of food, and the weight needs to be in kg)
// // 2. Find Sarah's dog and log to the console whether it's eating too much or too little.HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky(on purpose) 🤓
// // 3. Create an array containing all owners of dogs who eat too much('ownersEatTooMuch') and an array with all owners of dogs who eat too little('ownersEatTooLittle').
// // 4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
// // 5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended(just true or false)
// // 6. Log to the console whether there is any dog eating an OKAY amount of food(just true or false)
// // 7. Create an array containing the dogs that are eating an OKAY amount of food(try to reuse the condition used in 6.)
// // // 8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order(keep in mind that the portions are inside the array's objects)

// // // HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
// // //     HINT 2: Being within a range 10 % above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10).Basically, the current portion should be between 90 % and 110 % of the recommended portion.

// // // TEST DATA:
// // const dogs = [
// //     { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
// //     { weight: 8, curFood: 200, owners: ['Matilda'] },
// //     { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
// //     { weight: 32, curFood: 340, owners: ['Michael'] }
// // ];

// // dogs.forEach((dog) => {
// //     dog.recommendedFood = dog.weight * 0.75 * 28;
// // })
// // console.log(dogs);
// // dogs.map(dog => {
// //     if (dog.owners.includes('Sarah')) {
// //         if (dog.curFood > dog.recommendedFood) {
// //             console.log("Sarah's Dog Eating too much");
// //         }
// //         else {
// //             console.log("Sarah's Dog Eating too less");
// //         }
// //     }
// //     return dog;
// // });

// // Random number b/w two numbers
// // const randomNumber = (a, b) => (Math.trunc(Math.random() * (b - a) + 1) + a)


// // console.log(randomNumber(5, 100));


// // console.log(2 ** 53 - 1);
// // console.log(Number.MAX_SAFE_INTEGER);
// // // const a = 9007199254740992
// // console.log(2 ** 53 + 1);
// // console.log(2 ** 53 + 2);
// // console.log(2 ** 53 + 3);
// // console.log(2 ** 53 + 4);

// // console.log(2312312123123123123123123123123n);

// // const now = new Date();
// // console.log(now);

// // console.log(new Date('Jun 16 2021 15:51:06'));

// // console.log(new Date(0));
// // const future = new Date(2037, 10, 9, 5, 23);

// // console.log(future);
// // console.log(future.getFullYear());
// // console.log(future.getMonth());
// // console.log(future.getDate());
// // console.log(future.getDay());
// // console.log(future.toISOString());
// // console.log(future.getTime());
// // console.log(Date.now());
// // future.setFullYear(2040)
// // console.log(future);

// // Date Difference -

// // 


// // console.log(calcDays(new Date(2037, 3, 14), new Date(2037, 3, 24)));

// //  Nummber Format --

// const num = 2312123123.23;

// const options = {
//     style: "currency", // currency or percent or unit
//     // unit: "kilometer-per-hour"
//     currency: 'INR',
//     useGrouping: false
// }

// console.log(new Intl.NumberFormat('en-US', options).format(num));
// console.log(new Intl.NumberFormat('en-GB', options).format(num));
// console.log(new Intl.NumberFormat('en-IN', options).format(num));
// console.log(new Intl.NumberFormat('de-DE', options).format(num));
// console.log(new Intl.NumberFormat(navigator.language, options).format(num));


// const ingredients = ["olives", "pineapple"];

// const arrival = setTimeout((ing1, ing2) => console.log(`Your Pizza is here, with ${ing1} and ${ing2}`), 3000, ...ingredients);
// console.log("waiting..");

// if (ingredients.includes('pineapple')) {
//     clearTimeout(arrival);

// }

// setInterval 
// clock --->
setInterval(() => {
    const now = new Date();
    console.log(`${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`);
}, 1000);

