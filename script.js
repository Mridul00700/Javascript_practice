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

// const Person = function (firstname, birthYear) {
//     // Instance properties
//     this.firstname = firstname;
//     this.birthYear = birthYear;
//     // return super;
//     //     this.super();

//     // Never do this --->> method inside constructor function...
//     // Instance Methods
//     // this.calcAge = function () {
//     //     console.log(2021 - this.birthYear);
//     // };
// }

// const mridul = new Person('Mridul', 1995);
// console.log(mridul);


// // Static Methods
// Person.hey = function () {
//     console.log('Hey!!!!!!!!');
//     console.log(this);
// }

// Person.hey();
// mridul.hey() Error as its not in the prototype of all the objects


// const achyut = new Person('Achyut', 1994);
// console.log(achyut);
// const jay = {};

// console.log(mridul instanceof Person);
// console.log(jay instanceof Person);

// // 1. empty object is created  New {} is created
// // 2. function is called and this keyword is set to this newly created object..  this = {}
// // 3. new {} linked to prototype .. 
// // 4. function automatically returns empty {} which need not to be empty...


// //  Prototypes  - all the objects created from constructor function will inherit prototype property... as all functions
// //  even constructor function has prototype property on them. 


// console.log(Person.prototype);
// Person.prototype.calcAge = function () {
//     console.log(2021 - this.birthYear);
// };

// // As calcAge will be avaliable to every object created through Person constructor function, through inheritance
// mridul.calcAge();
// achyut.calcAge();
// // We have access to calcAge function because of protytypal inheritance-- it's not present in object.
// console.log(mridul);

// // By utilising prototypal inheritance we only create one copy of calAge function for all the objects created from Person 
// // Constructor function.

// // Every object has prototype property 

// //  new keyword creates proto property on empty objects and sets it to prototype property of Person(constructor function) 
// console.log(mridul.__proto__);
// console.log(mridul.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(mridul));
// console.log(Person.prototype.isPrototypeOf(achyut));
// console.log(Person.prototype.isPrototypeOf(Person));

// // We can set properties too not only functions

// Person.prototype.species = "Homo Sapiens"
// console.log(mridul);
// console.log(mridul.species);
// // Not it's own property--- just has prototypal inheritance from Person constructor function
// console.log(mridul.hasOwnProperty('firstname'));
// console.log(mridul.hasOwnProperty('species'));


// //mridul.protoype 
// console.log(mridul.__proto__);
// // Object.prototype (Top of prototype chain)
// console.log(mridul.__proto__.__proto__);
// // Null
// console.log(mridul.__proto__.__proto__.__proto__);

// // Will point back to Person itself (Person.prototype.constructor)
// // console.log(Person.prototype.constructor);
// console.dir(Person.prototype.constructor);

// //  prototype of array -->>
// const arr = [3, 4, 5, 3, 6, 9, 77, 2, 4, 6, 5, 77, 8];  // [] => shorthand for new Array same as {} shorthand for new Object
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);
// console.log(arr.__proto__.__proto__);
// console.log(arr.__proto__.__proto__ === Object.prototype);
// console.log(arr.__proto__.__proto__.__proto__);

// //  Hence all the build in methods are just reused by prototypal inheritance..

// //  We can ourselves add methods that will work on all arrays that is created using Array /(or) [] constructor function
// Array.prototype.unique = function () {
//     return [...new Set(this)];
// }
// // New property to array itself like any other default function as - map forEach filter etc (etcetra);
// console.log(arr.unique());


// //
// const h1 = document.querySelector('.main');
// console.dir(x => x + 1);

// Coading

/*
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

*/

// const Car = function (make, speed) {
//     this.make = make;
//     this.speed = speed;
// }

// const car1 = new Car("BMW", 120);
// const car2 = new Car("Mercedes", 95);

// Car.prototype.accelerate = function () {
//     this.speed += + 10;
//     console.log(this.speed);
// }

// Car.prototype.brake = function () {
//     this.speed -= 5;
//     console.log(this.speed);
// }

// car1.accelerate();
// car1.accelerate();
// car1.accelerate();
// car1.accelerate();
// car1.brake();
// car1.brake();

// car2.accelerate();
// car2.accelerate();
// car2.accelerate();
// car2.brake();


//  Classes --->>>

// Class Expression -> 
// Class is special type of function
// const PersonCl = class {

// }


// // Class Declaration ->

// class PersonCl {
//     // pass in arguments (as properties) that you want the obejct to have
//     // Whenever we will use new keyword this constructor is called..
//     constructor(fullName, birthYear) {
//         this.fullName = fullName;
//         this.birthYear = birthYear
//     }

//     // added to prototype property of the person class
//     // instance methods
//     calcAge() {
//         console.log(2021 - this.birthYear);
//     }

//     greet() {
//         console.log(`Hey ${this.firstName}`);
//     }
//     // added as property 
//     get Age() {
//         return 2021 - this.birthYear;
//     }

//     set fullName(name) {
//         if (name.includes(' '))
//             this._fullName = name
//         else
//             alert(`${name} is not a full name`)
//     }

//     get fullName() {
//         return this._fullName;
//     }
//     // static not inherited
//     static hey() {
//         console.log('Hey there!!!!');
//         console.log(this);
//     }

// }

// const jay = new PersonCl('Jay Marvel', 1999);
// console.log(jay);
// jay.calcAge();
// console.log(jay.__proto__ === PersonCl.prototype);
// // PersonCl.prototype.greet =
// console.log(jay.Age);
// console.log(jay.fullName);

// jay.greet();
// Person.hey();
// // jay.hey();

// const walter = new PersonCl('Walter Peirce', 1976);
// console.log(walter);
// console.log(walter.fullName);


// Static methods -->>
// Array.from is attached to constructors not in prototype   Number.parseFloat(12); not avaliable on number






// Classes are not hoisted .... function declaration are hoisted hence can be used before than they are declared
// Classes are also first class citizens Pass them in function and get a return class from function
// Body of a class in always executed in strict mode 

// ////////////////////////////////////////////////////////////
// Getters and Setters 

// const account = {
//     owner: 'Mridul',
//     movement: [22, 44, 67, 7887, 12],
//     // for getter we add get
//     get latest() {
//         return this.movement.slice(-1).pop();
//     },
//     // Exactly one patameter
//     set latest(a) {
//         this.movement.push(a);
//     }
// }

// console.log(account.latest);
// // Setter like any other properties
// account.latest = 50

// console.log(account);

//  Getters and setters can be useful with data validation --->>>>



// // Object.create ---->>> 
// // person prototype ------
//  const PersonProto = {
//     calcAge() {
//         console.log(2021 - this.birthYear);
//     },
//     init(name, birthYear) {
//         this.name = name;
//         this.birthYear = birthYear;
//     }
// };

// // Creating the object person with prototype of Personproto
// // prototypal inheritance ----->>>>     least used way to create prototypal inheritances
// const rake = Object.create(PersonProto);
// console.log(rake);

// // rake.name = 'Rake'
// // rake.birthYear = 2010;
// rake.init('Rake', 2010);
// rake.calcAge();

// console.log(rake.__proto__);


// const sara = Object.create(PersonProto);

// sara.init('Sara', 2005);
// sara.calcAge();

/*
1. Use a ES6 Class to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

*/

// class Car {
//     constructor(make, speed) {
//         this.make = make;
//         this.speed = speed;
//     }

//     accelerate() {
//         this.speed += 10;
//         console.log("km/hr", this.speed);
//     }

//     brake() {
//         this.speed -= 5;
//         console.log("km/hr", this.speed);
//     }

//     get speedUS() {
//         // console.log(this._speed);
//         return (this.speed / 1.6)

//     }
//     set speedUS(speed) {
//         this.speed = speed * 1.6;
//     }
// }

// const Ford = new Car('Ford', 120);
// console.log(Ford.speedUS);
// Ford.accelerate();
// Ford.accelerate();
// Ford.accelerate();
// Ford.accelerate();
// console.log(Ford.speedUS);

// Ford.accelerate();
// console.log(Ford.speedUS);

// Ford.brake();
// Ford.brake();
// Ford.brake();
// console.log(Ford.speedUS);
// Ford.brake();
// Ford.brake();
// console.log(Ford.speedUS);
// Ford.speedUS = 150
// console.log(Ford);


// const Person = function (firstname, birthYear) {
//     // Instance properties
//     this.firstname = firstname;
//     this.birthYear = birthYear;
// }


// Person.prototype.calcAge = function () {
//     console.log(2021 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//     Person.call(this, firstName, birthYear)
//     this.course = course;
// }


// // Object.create returns empty object ...
// Student.prototype = Object.create(Person.prototype);


// Student.prototype.introduce = function () {
//     console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const mike = new Student('Mike', 2015, 'Computer')
// console.log(mike);

// mike.introduce();
// mike.calcAge();

// console.log(mike.__proto__);

// console.log(mike.__proto__.__proto__);

// console.log(mike instanceof Student);
// console.log(mike instanceof Person);
// console.log(mike instanceof Object);
// Student.prototype.constructor = Student
// console.dir(Student.prototype.constructor);


// const Car = function (make, speed) {
//     this.make = make;
//     this.speed = speed;
// }

// Car.prototype.accelerate = function () {
//     this.speed += 10;
//     console.log(this.speed, "From Car");
// }

// Car.prototype.brake = function () {
//     this.speed -= 5;
//     console.log(this.speed);
// }

// const ElectricCar = function (make, speed, charge) {
//     Car.call(this, make, speed);
//     this.charge = charge;
// }

// ElectricCar.prototype = Object.create(Car.prototype);

// ElectricCar.prototype.chargeBattery = function (chargeTo) {
//     this.charge = chargeTo;
// };

// ElectricCar.prototype.accelerate = function () {
//     this.speed += 20;
//     this.charge -= 1;
//     console.log(`Tesla is going at ${this.speed}, with a charge of ${this.charge}`);
// };


// const ElectricV = new ElectricCar('Tesla', 123, 23);

// ElectricV.accelerate();
// ElectricV.accelerate();
// ElectricV.brake();
// ElectricV.accelerate();
// ElectricV.accelerate();
// ElectricV.brake();
// ElectricV.chargeBattery(90)
// ElectricV.accelerate();
// ElectricV.accelerate();



// Object.create ---- inheritance..

// const PersonProto = {
//     calcAge() {
//         console.log(2021 - this.birthYear);
//     },
//     init(name, birthYear) {
//         this.name = name;
//         this.birthYear = birthYear;
//     },
//     introduce() {
//         console.log("sdsdsd");
//     }
// };

// const mike = Object.create(PersonProto);

// const StudentProto = Object.create(PersonProto);
// StudentProto.init = function (firstName, birthYear, course) {
//     PersonProto.init.call(this, firstName, birthYear)
//     this.course = course;
// }


// const jay = Object.create(StudentProto);

// jay.init('jay', 2008, 'cs');

// // Overrite!!!
// StudentProto.introduce = function () {
//     console.log("hi there!!!");
// }
// jay.introduce();

// jay.calcAge();

// Class Example --
// Data privacy and Encapsulation ---->>>


// Class fields ---- >>>>


// Public fields
// Private fields
// Public methods
// Private methods
//  There are also static versions

// class Account {

//     // Public fields --->>> 
//     // no need for const or let 
//     // These fields will be added on instances  while methods added in class will be on prototype
//     locale = navigator.language;

//     // Private fields -->>
//     #movements = [];
//     #pin;


//     constructor(owner, currency, pin) {
//         this.owner = owner;
//         this.currency = currency;
//         this.#pin = pin;
//         // Protected property not truly private.... developers agree to do this to protect data...
//         // this._movements = [];
//         // this.locale = navigator.language;

//         console.log(`thanks for opening account ${owner}`);
//     }
//     // Public Interface of our objects
//     // Public Methods
//     getMovments() {
//         return this.#movements;
//     }

//     // Internal methods
//     deposit(val) {
//         this.#movements.push(val);
//         return this
//     }

//     // Static are just helper function not avaliable on the instances but on class itself
//     static helper() {
//         console.log("Help!!");
//     }

//     withdrawl(val) {
//         // We can call other function too ...
//         this.deposit(-val);
//         return this
//     }

//     // Internal method
//     requestLoan(val) {
//         if (this.#approveLoan(val)) {
//             this.deposit(val);
//             console.log("loan approved!!");
//             return this
//         }
//     }

//     // Private methods ---
//     // not avaliable as it declares as prop instead of putting in prototype
//     #approveLoan(loan) {
//         return true;
//     }

// }

// const acc1 = new Account('Mike', 'INR', 2345);
// acc1.deposit(250);
// acc1.withdrawl(140);
// console.log(acc1);

// acc1.requestLoan(400);

// We cannot access movements private field here as intended
// console.log(acc1.#movements);

// acc1.movements.push(223);
// console.log(acc1.#pin);
// // console.log(acc1.#approveLoan(22));

// console.log(acc1.getMovments());

// // Chaining --- >
// acc1.deposit(33).deposit(343).withdrawl(222).requestLoan(1222).withdrawl(2221);
// console.log(acc1.getMovments());




// class CarCl {


//     constructor(make, speed) {
//         this.make = make;
//         this.speed = speed;
//     }

//     accelerate() {
//         this.speed += 10;
//         console.log("km/hr", this.speed);
//     }

//     brake() {
//         this.speed -= 5;
//         console.log("km/hr", this.speed);
//         return this
//     }

//     get speedUS() {
//         // console.log(this._speed);
//         return (this.speed / 1.6)

//     }
//     set speedUS(speed) {
//         this.speed = speed * 1.6;
//     }
// }

// class EVCl extends CarCl {


//     #charge;
//     constructor(make, speed, charge) {
//         super(make, speed);
//         this.#charge = charge;
//     }

//     chargeBattery(chargeTo) {
//         this.#charge = chargeTo;
//         return this
//     }

//     accelerate() {
//         this.speed += 20;
//         this.#charge -= 1;
//         console.log(`Tesla is going at ${this.speed}, with a charge of ${this.#charge}`);
//         return this
//     }
// }


// const rivian = new EVCl('Rivian', 120, 23);
// // console.log(rivian.#charge);

// rivian.accelerate().accelerate().accelerate().brake().chargeBattery(50).accelerate()


// console.log(rivian.speedUS);

// Coding Challenge #1

/*
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/

const whereAmI = (lat, lng) => {
    fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`).then(res => {
        if (!res.ok) {
            throw new Error(`Please try after sometime as you have exceeded the rate limit of geocoading ${res.status}`);
        }
        return res.json()
    })
        .then(data => {
            console.log(data, `You are in ${data.city}, ${data.country}`);
        }).catch(err => console.log(err));
}

whereAmI(52.508, 13.381);