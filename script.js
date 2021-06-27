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


// // const ingredients = ["olives", "pineapple"];

// // const arrival = setTimeout((ing1, ing2) => console.log(`Your Pizza is here, with ${ing1} and ${ing2}`), 3000, ...ingredients);
// // console.log("waiting..");

// // if (ingredients.includes('pineapple')) {
// //     clearTimeout(arrival);

// // }

// // // setInterval 
// // // clock --->
// // setInterval(() => {
// //     const now = new Date();
// //     console.log(`${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`);
// // }, 1000);


// // // DOM -->

// // console.log(document.documentElement);

// // // Return first element with .header selector   . for class and # for ID 
// // document.querySelector('.header');

// // //  Return All the elements with .header selector (Node List)
// // document.querySelectorAll('header');

// // document.getElementById('section');
// // //  Returns HTML collection not nodeList... Live list, any changes are reflected here immediately   
// // document.getElementsByTagName('button');
// // document.getElementsByClassName('btn');

// // creating and inserting elements 
// // .insertAdjacentHTML

// // // object that represent dom element -->
// const ele = document.createElement('div');

// ele.classList.add('cookie-message');
// // ele.textContent = "We use cookies to improve funcationality and analytics."
// const header = document.querySelector('.header');
// ele.innerHTML = 'We use cookies to improve funcationality and analytics. <button class= "btn btn--close-cookie" > Got it! </button > '

// // header.prepend(ele);
// header.append(ele);
// // header.append(ele.cloneNode(true));

// // header.before(ele);
// // header.after(ele);

// // Delete Elements

// document.querySelector('.btn--close-cookie').addEventListener('click', () => {
//     ele.remove();
//     // ele.parentElement.removeChild(ele);  --> Dom traversing 
// })
// // inline styles
// ele.style.backgroundColor = '#37383d';
// // ele.style.width = '120%';
// // // Hidden class not inline
// // console.log(ele.style.height);
// // // InLine style
// // console.log(ele.style.backgroundColor);
// // // Accessing hidden style under class
// // console.log(getComputedStyle(ele).color);
// // console.log(getComputedStyle(ele).height);

// // ele.style.height = Number.parseFloat(getComputedStyle(ele).height, 10) + 30 + "px"


// // document.documentElement.style.setProperty('--color-primary', 'orangered');

// // const img = document.querySelector('.img');

// // console.log(img.dataset.versionNumber);
// // // ele.classList.add('c')
// // // ele.classList.remove('c')
// // // ele.classList.toggle('c')
// // // ele.classList.contains('c')


// //  // Dont use... Overwright the class whatever is already there
// // // ele.className = "Mri"

// // Event - EventHandlers -->


// const h1 = document.querySelector('h1');
// // mouseenter = hover

// const event1 = (e) => {
//     alert('addEventListner : Heading');

// }

// h1.addEventListener('mouseenter', event1);

// setTimeout(() => h1.removeEventListener('mouseenter', event1), 10000)


// // Advantage of using oneventhandler --- 1) Multiple listeners on same elements..  2) Remove listners incase we don't need it..

// // Old way -->
// // h1.onmouseenter = (e) => {
// //     alert('addEventListner : Heading');
// // }




// // Dom trversing -->>

// const div = document.querySelector('.main-div');

// // Downwards ---> 
// console.log(div.querySelectorAll('.span'));
// console.log(div.childNodes);
// console.log(div.children);

// div.firstElementChild.style.color = "white";
// div.lastElementChild.style.color = "black";

// //  Upwards ---> Parents 
// console.log(div.parentElement);
// div.closest('.header').style.background = 'var(--gradient-secondary)';

// // Sideways -- siblings  only direct --- left or right / previous or next

// console.log(div.previousElementSibling);
// console.log(div.nextElementSibling);

// console.log(div.previousSibling);
// console.log(div.nextSibling);


// console.log(div.parentElement.children);
// [...div.parentElement.children].forEach(el => {
//     if (el !== div) {
//         el.style.transform = 'scale(0.5)'
//     }
// })

// OOP -->>
// Constructor Function ---
// Arrow function cannot work as constructor function as we need this keyword....

const Person = function (firstname, birthYear) {
    // Instance properties
    this.firstname = firstname;
    this.birthYear = birthYear;
    // return super;
    //     this.super();

    // Never do this --->> method inside constructor function...
    // this.calcAge = function () {
    //     console.log(2021 - this.birthYear);
    // };
}

const mridul = new Person('Mridul', 1995);
console.log(mridul);



const achyut = new Person('Achyut', 1994);
console.log(achyut);
const jay = {};

console.log(mridul instanceof Person);
console.log(jay instanceof Person);

// 1. empty object is created  New {} is created
// 2. function is called and this keyword is set to this newly created object..  this = {}
// 3. new {} linked to prototype .. 
// 4. function automatically returns empty {} which need not to be empty...


//  Prototypes  - all the objects created from constructor function will inherit prototype property... as all functions
//  even constructor function has prototype property on them. 


console.log(Person.prototype);
Person.prototype.calcAge = function () {
    console.log(2021 - this.birthYear);
};

// As calcAge will be avaliable to every object created through Person constructor function, through inheritance
mridul.calcAge();
achyut.calcAge();
// We have access to calcAge function because of protytypal inheritance-- it's not present in object.
console.log(mridul);

// By utilising prototypal inheritance we only create one copy of calAge function for all the objects created from Person 
// Constructor function.

// Every object has prototype property 

//  new keyword creates proto property on empty objects and sets it to prototype property of Person(constructor function) 
console.log(mridul.__proto__);
console.log(mridul.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(mridul));
console.log(Person.prototype.isPrototypeOf(achyut));
console.log(Person.prototype.isPrototypeOf(Person));

// We can set properties too not only functions

Person.prototype.species = "Homo Sapiens"
console.log(mridul);
console.log(mridul.species);
// Not it's own property--- just has prototypal inheritance from Person constructor function
console.log(mridul.hasOwnProperty('firstname'));
console.log(mridul.hasOwnProperty('species'));


//mridul.protoype 
console.log(mridul.__proto__);
// Object.prototype (Top of prototype chain)
console.log(mridul.__proto__.__proto__);
// Null
console.log(mridul.__proto__.__proto__.__proto__);

// Will point back to Person itself (Person.prototype.constructor)
// console.log(Person.prototype.constructor);
console.dir(Person.prototype.constructor);

//  prototype of array -->>
const arr = [3, 4, 5, 3, 6, 9, 77, 2,];  // [] => shorthand for new Array same as {} shorthand for new Object
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);
console.log(arr.__proto__.__proto__ === Object.prototype);
console.log(arr.__proto__.__proto__.__proto__);

//  Hence all the build in methods are just reused by prototypal inheritance..
