// function findLongestWord(string) {
//   // Change code below this line
//   let strSplit = string.split(' ');
//   console.log(string.split(" "));
// let longestWord = 0;

//   for (let i = 0; i < strSplit.length; i += 1) {
//     if (strSplit[i].length > longestWord) {
//       longestWord = strSplit[i].length;
//       console.log(longestWord);
//     }
//   }

// return longestWord;
//   // Change code above this line
// }

// findLongestWord("The quick brown fox jumped over the lazy dog")
// const findLongestWord = function (str) {
//   let arrStr = str.split(" ");
//   let wordLength = 0;
//   let longestWord;

//   for (let i = 0; i < arrStr.length; i += 1) {
//     wordLength = arrStr[1].length;
//

//     if (arrStr[i].length > wordLength) {
//       longestWord = arrStr[i];
//       console.log(longestWord);

//     }

//   }

// }

// findLongestWord("The quick brown fox jumped over the lazy dog");

// function findLongestWord(string) {
//   // Change code below this line

//   let words = string.split(" ");
//   let longestWord = words[0];
//   for (let i = 0; i < words.length; i += 1) {
//     // Change this line
//     if (words[i].length > longestWord.length) {
//       longestWord = words[i];
//     }
//   }
//   return longestWord;
//   // Change code above this line
// }
// findLongestWord("The quick brown fox jumped over the lazy dog");

// function findLongestWord(str) {
//   let strSplit = str.split(' ');
//   let longestWord = 0;
//   for(let i = 0; i < strSplit.length; i++){
//     if(strSplit[i].length > longestWord){
// 	longestWord = strSplit[i];
//      }
//   }
//   console.log(longestWord);
// }
// findLongestWord("The quick brown fox jumped over the lazy dog");

// function filterArray(numbers, value) {
//   // Change code below this line
//   const newArray = [];

//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value) {
//       newArray.push(numbers[i]);
//     }

//   }
//   console.log(newArray);
//   return newArray;

//   // Change code above this line
// }
// filterArray([1, 2, 3, 4, 5], 3);
// filterArray([1, 2, 3, 4, 5], 4);
// filterArray([1, 2, 3, 4, 5], 5);
// filterArray([12, 24, 8, 41, 76], 38);

// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];
//   return fruits.includes(fruit);

//   // Change this line
// }
// checkFruit("plum");
// checkFruit("mandarin");

// const array1 = [1, 2, 5, 3];
// const array2 = [1, 2, 7, 3, 8];

// function getCommonElements(array1, array2) {
//   for (let i = 0; i < array1.length; i += 1) {
//     //проходимся по первому массиву
//     let newArray = [];
//     for (let j = 0; j < array2.length; i += 1) {
//       // по второму
//       const arr1 = array1[i];
//       const arr2 = array2[j];
//       if (arr1[i] === arr2[j]) {
//         //if (array1[i].includes(array2[j]))  //проверяем на совпадение через includes (но у меня не работает)
//         newArray = array1.push(array2); //возвращаю новый массив, состоящий из тех элементов, которые присутствуют в обоих исходных массивах. (не работает)
//       }
//     }
//     console.log(newArray);
//     return newArray;
//   }
// }
// getCommonElements([1, 2, 3], [2, 4]);

// function getCommonElements(array1, array2) {
//   // Change code below this line
//   const newArray = [];

//   for (let i = 0; i < array1.length; i += 1) {
//     if (array2.includes(array1[i])) {
//       newArray.push(array1[i]);
//     }
//   }

//   console.log(newArray);
//   return newArray;

//   // Change code above this line
// }

// getCommonElements([1, 2, 3], [2, 4]);

// const intersection = (array1, array2) => {
//   let result = [];
//   for (let i = 0; i < array1.length; i++) {
//     if (array2.includes(array1[i])) {
//       result.push(array1[i]);
//     }
//   }
//   console.log(result);
//   return result;
// };

// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   for (let number of numbers) {

//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }
//   console.log(filteredNumbers);
//   return filteredNumbers;
//   // Change code above this line
// }
// filterArray([1, 2, 3, 4, 5], 3);

// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;

//   // for (const key in object) {
//   //   if (object.hasOwnProperty(key)) {
//   //     propCount += 1;
//   //   }
//   // }

//   const objectProperty = Object.keys(object);

//   for (let key of objectProperty) {
//     propCount += 1;
//   }
// console.log(propCount);
//   return propCount;
//   // Change code above this line
// }
// countProps({ name: "Mango", age: 2 });
// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 });

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
//   let totalPrice = 0;

//   for (let product of products) {

//     if (product.name === productName) {
//       totalPrice = product.price * product.quantity;
//     }

//   }
// console.log(totalPrice);
//   return totalPrice;

//   // Пиши код выше этой строки
// }

// calculateTotalPrice("Blaster");
// calculateTotalPrice("Radar");
// calculateTotalPrice("Droid");

// const bookShelf = {
//   // Change code below this line
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },
//   updateBook (oldName, newName) {
//     return `Updating book ${oldName} to ${newName}`;
//   }
//   // Change code above this line
// };
// const users = [
//   "Artem",
//   "Anna",
//   "Larisa",
//   "Maksim",
//   "Svetlana",
//   "David",
//   "Roman",
//   "Olga",
// ];

// const mens = ["Artem", "Maksim", "David", "Roman"];
// // создаем пустой масив
// function sortName(users, mens) {
//   const arrName = [];

//   for (const name of users) {
//     if (!mens.includes(name)) {

//       arrName.push(name)
//     }

//   }

//   return arrName;
// }
// console.log(sortName(users, mens));

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line

// function makeMessage(pizzaName, callback) {
//   const message = callback(pizzaName);
//   return message;
// }

// console.log(makeMessage("Royal Grand", makePizza));
// console.log(makeMessage("Ultracheese", deliverPizza));

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line

//   orderedItems.forEach(function (orderedItems, index) {
//       console.log(`Индекс ${index}, значение ${orderedItems}`);
//     totalPrice += orderedItems;
//   });

//   // for (let i = 0; i < orderedItems.length; i += 1) {
//   //   totalPrice += orderedItems[i];
//   // }

//   // Change code above this line
//   console.log(totalPrice);
//   return totalPrice;
// }
// calculateTotalPrice([12, 85, 37, 4]);

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line

//   numbers.forEach(function (numbers, index) {
//     console.log(`Индекс ${index}, значение ${numbers}`);
//     if (numbers > value) {
//       filteredNumbers.push(numbers);
//     }
//   });

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] > value) {
//     filteredNumbers.push(numbers[i]);
//   }
// }

// Change code above this line
//   console.log(filteredNumbers);
//   return filteredNumbers;
// }
// filterArray([1, 2, 3, 4, 5], 3);

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line
//   firstArray.forEach(function (firstArray) {
//     if (secondArray.includes(firstArray)) {
//       commonElements.push(firstArray);
//     }
//    });

//   // for (let i = 0; i < firstArray.length; i += 1) {
//   //   if (secondArray.includes(firstArray[i])) {
//   //     commonElements.push(firstArray[i]);
//   //   }
//   // }
//   console.log(commonElements);
//   return commonElements;
//   // Change code above this line
// }
// getCommonElements([1, 2, 3], [2, 4]);

// Change code below this line
// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;

//   orderedItems.forEach(function (item) {
//     totalPrice += item;
//   });

//   console.log(totalPrice);
//   return totalPrice;
// }
// calculateTotalPrice([12, 85, 37, 4]);

// function changeEven(numbers, value) {
//   // Change code below this line
//   const newArray = [];

//   numbers.forEach(number => {
//     if (number % 2 === 0) {
//       newArray.push(number + value);
//     }
//     if (number % 2 !== 0) {
//       newArray.push(number)
//     }
//   });
//   console.log(newArray);
//   return newArray;
// }

// changeEven([1, 2, 3, 4, 5], 10); //возвращает новый массив [1, 12, 3, 14, 5]
// changeEven([2, 8, 3, 7, 4, 6], 10);//возвращает новый массив [12, 18, 3, 7, 14, 16]

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// // Change code below this line
// const allGenres = books.flatMap(book => book.genres);
// const uniqueGenres = allGenres.filter((genre, index, books) => books.indexOf(genre) === index);
// console.log(uniqueGenres);

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: [
//       "Jacklyn Lucas",
//       "Linda Chapman",
//       "Adrian Cross",
//       "Solomon Fokes",
//     ],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//   },
// ];
// const getTotalBalanceByGender = (users, gender) => {
//   return users

//     .filter(user => user.gender === gender)
//     .reduce((total, user) => {

//   return total += user.balance;
// }, 0);
// };
// console.log(users.map((user) => user.gender));

// console.log(getTotalBalanceByGender(users, "female"));

// const getSortedFriends = (users) =>
//   users
//     .flatMap((user) => user.friends)
//     .filter((friend, index, users) => users.indexOf(friend) === index)
//     .sort((firstFriend, secondFriend) =>
//       firstFriend.localeCompare(secondFriend)
//     );

// const getNamesSortedByFriendCount = (users) =>
//   [...users]
//     .sort((firstUser, secondUser) =>
//         firstUser.friends.length - secondUser.friends.length)
//     .flatMap((user) => user.name);

// Change code above this line

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { titelBook: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
// ];
// const BOOK_TITLE = "The Dream of a Ridiculous Man";
// const AUTHOR = "Robert Sheckley";
// // Change code below this line

// const bookWithTitle = books.find((book) => book.title === BOOK_TITLE);
// console.log(bookWithTitle);
// const bookByAuthor = books.find((book) => book.author === AUTHOR);
// console.log(bookByAuthor);

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// const eachElementInFirstIsEven = firstArray.every((value) => value % 2 === 0);
// console.log(eachElementInFirstIsEven);
// const eachElementInFirstIsOdd = firstArray.every((value) => value % 2 !== 0);
// console.log(eachElementInFirstIsOdd);

// const eachElementInSecondIsEven = secondArray.every((value) => value % 2 === 0);
// console.log(eachElementInSecondIsEven);
// const eachElementInSecondIsOdd = secondArray.every((value) => value % 2 !== 0);
// console.log(eachElementInSecondIsOdd);

// const eachElementInThirdIsEven = thirdArray.every((value) => value % 2 === 0);
// console.log(eachElementInThirdIsEven);
// const eachElementInThirdIsOdd = thirdArray.every((value) => value % 2 !== 0);
// console.log(eachElementInThirdIsOdd);

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] % 2 === 0) {
//     numbers[i] = numbers[i] + value;
//   }
// }
// Change code above this line

// const pureMultiply = (array, value) => {
//   const newArray = [];

//   array.forEach(element => {
//     newArray.push(element * value);
//   });

//   return newArray;
// };

// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = pureMultiply(numbers, 2);

// // Не произошло мутации исходных данных
// console.log(numbers); // [1, 2, 3, 4, 5]
// // Функция вернула новый массив с изменёнными данными
// console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = books
//   .filter((book) => book.rating > 8)
//   .map((book) => book.author)
//   .sort((firstBook, secondBook) => firstBook.localeCompare(secondBook));

// console.log(names);

// class Storage {
//   constructor(items) {
//     this.items = items;
//   }
//   getItems() {
//     return this.items;
//   }
//   addItem(newItem) {
//     this.items.push(newItem);
//   }
//   removeItem(itemToRemove) {
//     for (let i = 0; i < this.items.length; i += 1) {
//       const item = this.items[i];
//       if (itemToRemove === item) {
//         this.items.splice(i, 1);
//       }
//     }
//   }
// }
// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// class StringBuilder {
//   constructor(initialValue) {
//     this.value = initialValue;
//   }
//   getValue() {
//     return this.value;
//   }
//   padEnd(str) {
//     this.value += str;
//   }
//   padStart(str) {
//     this.value = str + this.value
//   }
//   padBoth(str) {
//     this.value = str + this.value + str;
//   }
// }

// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

// class Car {
//   // Change code below this line

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   getBrand() {
//     return this.#brand;
//   }
//   changeBrand(newBrand) {
//     this.#brand = newBrand;
//   }

//   // Change code above this line
// }

// class Car {
//   // Change code below this line
//   static MAX_PRICE = 50000;

//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice > Car.MAX_PRICE) {
//       return this.#price;

//     }
//     if (newPrice < Car.MAX_PRICE || newPrice === Car.MAX_PRICE) {
//       return this.#price = newPrice;
//     }
//     // Change code above this line
//   }
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

// class Car {
//   static #MAX_PRICE = 50000;
//   // Change code below this line

//   static checkPrice(price) {
//     if (price > Car.#MAX_PRICE) {
//       return "Error! Price exceeds the maximum";
//     }
//     return "Success! Price is within acceptable limits";
//   }

//   // Change code above this line
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Change code below this line

//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//     this.blacklistedEmails = [];
//   }
//   blacklist(email) {
//     this.blacklistedEmails.push(email);
//   }

//   isBlacklisted(email) {
//     return this.blacklistedEmails.includes(email);
//   }

//   // Change code above this line
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true

// Повернути обєкт де ключ це літера а значення скільки раз вона зустрічається в рядку
// const str = "fsdfwefwcsdqwwfwffsdfdrgerfsf";

// const newString = str.split('');
// console.log(newString);
// const object = newString.reduce((acc, element) => {
//   if (acc.hasOwnProperty(element)) {
//     acc[element] += 1;
//   }
//   else {
//     acc[element] = 1;
//   }

//   return acc;
// }, {})
//   ;
// console.log(object);

// Потрібно створити функцію
//Not found
// const people2 = [{
//         name: 'Alex',
//         know: ['Eva', 'Jhon'],
//     },
//     {
//         name: 'Jhon',
//         know: []
//     },
//     {
//         name: 'Eva',
//         know: []
//     },
//     {
//         name: 'Ivan',
//         know: ['Jhon', 'Alex']
//     },
// ];

// // jhon
// const people3 = [{
//         name: 'Alex',
//         know: ['Eva', 'Jhon'],
//     },
//     {
//         name: 'Jhon',
//         know: []
//     },
//     {
//         name: 'Eva',
//         know: ['Alex', 'Jhon']
//     },
//     {
//         name: 'Ivan',
//         know: ['Jhon', 'Alex']
//     },
// ];

// // Потрібно створити функцію яка буде шукати нарциса. Головна умова нарциса знають всі, нарцис не знає нікого.
// // Not found
// // const people1 = [{
// // Потрібно створити функцію яка буде шукати нарциса. Головна умова нарциса знають всі, нарцис не знає нікого.
// // Not found
// const people1 = [{
//         name: 'Alex',
//         know: ['Eva', 'Jhon'],
//     },
//     {
//         name: 'Ivan',
//         know: ['Jhon', 'Alex']
//     },
//     {
//         name: 'Eva',
//         know: ['Alex','Jhon']
//     },
//     {
//         name: 'Jhon',
//         know: ["Alex"]
//     },
// ]
// const findNarcice = newArrey => {
//   const frends = newArrey.filter(item => !item.know.length)

//   if (frends.length !== 1) {
//     console.log("не знайдено")
//     return
//   }
//   const narcice = frends[0].name

//   const findFr = newArrey.every(
//     (user) => user.name === narcice || user.know.includes(narcice)
//   );

//   if (findFr) {
//     return console.log(narcice);
//   }
//   console.log("не знайдено");
// }
// findNarcice(people3);

// if ([]) {
//   console.log("yes");
// } else {
//   console.log("no");
// }


// let a = 10;

// if (true) {
//   a = 15;
// }
// console.log(a);

// let a = 10;

// if (true) {
//   let a = 15;
//   a = 20;
// }
// console.log(a);

// let a = 10;

// if (true) {
//   a = 20;
//   let a = 15;
// }
// console.log(a);



// let x = 10;

// function foo(x) {
//   x = 99;
// }
// foo(x);
// console.log(x);



// const global = "global";

// if (true) {
//   const blockA = "block A";

//   // Видим глобальную + локальную A
//   console.log(global); // 'global'
//   console.log(blockA); // block A

//   // Переменные blockB и blockC не найдены в доступных областях видимости.
//   // Будет ошибка обращения к переменной.
//   console.log(blockB); // ReferenceError: blockB is not defined
//   console.log(blockC); // ReferenceError: blockC is not defined

//   if (true) {
//     const blockB = "block B";

//     // Видим глобальную + внешнюю A + локальную B
//     console.log(global); // global
//     console.log(blockA); // block A
//     console.log(blockB); // block B

//     // Переменная blockC не найдена в доступных областях видимости.
//     // Будет ошибка обращения к переменной.
//     console.log(blockC); // ReferenceError: blockC is not defined
//   }
// }

// if (true) {
//   const blockC = "block C";

//   // Видим глобальную + локальную C
//   console.log(global); // global
//   console.log(blockC); // block C

//   // Переменные blockA и blockB не найдены в доступных областях видимости.
//   // Будет ошибка обращения к переменной.
//   console.log(blockA); // ReferenceError: blockA is not defined
//   console.log(blockB); // ReferenceError: blockB is not defined
// }

// // Видим только глобальную
// console.log(global); // global
// // Переменные blockA, blockB и blockC не найдены в доступных областях видимости.
// // Будет ошибка обращения к переменной.
// console.log(blockA); // ReferenceError: blockA is not defined
// console.log(blockB); // ReferenceError: blockB is not defined
// console.log(blockC); // ReferenceError: blockC is not defined


// function grow(x) {
//   const total = x.reduce((acc, number) => {
//     return acc * number;
//   }, 1)
//   return total;
// }

//  function countSheep(num) {
//   //your code here
//   if (num >= 0 && Number.isInteger(num)) {
//     return `${num} sheep...${num} sheep...${num} sheep...`;
//   }
// };
// console.log(countSheep());
// function DNAtoRNA(dna) {
//   // create a function which returns an RNA sequence from the given DNA sequence
//   let result = "";
//   const list = dna.toUpperCase();
//   for (const nucleotide of list) {
//     if (nucleotide === "T") {
//       result += "U";
//     } else {
//       result += nucleotide;
//     }
//   }
//   return result;
// }
// console.log(DNAtoRNA("TTTT"));

// function bmi(weight, height) {
  
//   let bmi1 = Double(weight) / (height * height);

//   if (bmi1 <= 18.5) {
//     return "Underweight";
//   } else if (bmi1 <= 25.0) {
//     return "Normal";
//   } else if (bmi1 <= 30.0) {
//     return "Overweight";
//   } else if (bmi1 > 30.0) {
//     return "Obese";
//   } else {
//     return "";
//   }
// }


// const total = [2, 7, 3, 14, 6].reduce((previousValue, number) => {
//   return previousValue + number;
// }, 0);

// console.log(total); // 32

// потрібно створити функцію яка буде формувати чергу в магазині
// 1 перший параметр масив, кілікість елементів це кількість покіпців, значення елементу масиву це час який покупець витратить на касі
// 2 параметр це кількість кас
// Повертає обєкт де ключ це номер касси, значення це час черги на касі
// 12 + 2 + 15 = 29
// 3 + 5 + 6 + 7 = 21
// { 1 : 29, 2 : 21}


// function fn(buyers, cases) {
//     const obj = {
    
//     }
//     for (let i = 1; i <= cases; i += 1) {
//         obj[i] = 0;
//     }
//     console.log(obj);
//     buyers.forEach(buyer => {
//         const keyBuyer = Object.values(obj);
//         const min = Math.min(...keyBuyer)
//         const currentCass = keyBuyer.indexOf(min) + 1;
//         obj[currentCass] += buyer;
// // console.log(min);
//     });
    
//     return obj
// }
// console.log(fn([12,3,5,6,2,15,7],3))


// const instruments = [
//   {
//     id: 1,
//     img: "https://static.dnipro-m.ua/cache/products/1754/catalog_origin_141546.jpg",
//     name: "Молоток",
//     price: 150,
//   },
//   {
//     id: 2,
//     img: "https://static.dnipro-m.ua/cache/products/5098/catalog_origin_195568.jpg",
//     name: "Перфоратор",
//     price: 3000,
//   },
//   {
//     id: 3,
//     img: "https://static.dnipro-m.ua/cache/products/2023/catalog_origin_200763.jpg",
//     name: "Рівень",
//     price: 2000,
//   },
// ];
// const basket = [];
// const wish = [];

// const list = document.querySelector(".list");

// const markup = instruments.reduce(
//   (acc, instrument) =>
//     acc +
//     `<li class='js-item' data-id='${instrument.id}'>
// <img src="${instrument.img}" alt="${instrument.name}"  width="200px">
// <h2>${instrument.name}</h2>
// <p>${instrument.price}</p>
// <button class='js-add'>Add</button>
// <button class='js-wish'>Wish List</button>
// </li>`,
//   ""
// );
// list.insertAdjacentHTML("beforeend", markup);

// list.addEventListener("click", onItem);


// function onItem(evt) {
//     if (evt.target.classList.contains("js-add")) {
//     const toBasket = getProduct(evt.target);

//     const productInBasket = basket.find(({ id }) => id === currentId);

//     if (!productInBasket) {
//         toBasket.qty = 1;
//         toBasket.totalSum = toBasket.price;
//         basket.push(toBasket);
//     } else {
//         productInBasket.qty += 1;
//       productInBasket.totalSum = productInBasket.qty * productInBasket.price;
//     }
//     console.log(basket);
//     return;
//     }

//     if (evt.target.classList.contains("js-wish")) {
//     }
// }

// function getProduct(elem) {
//   const currentProduct = elem.closest(".js-item");
//   const currentId = Number(currentProduct.dataset.id);
//   const product = instruments.find(({ id }) => id === currentId);
  
//   return product;
// }



// Стоврити функцію яка буде перебирати масив обєктів (films),з кожного обєкта потрібно взяти IDs жанрів фільмів та знайти
// їх в іншому єбєкті який буде містити в собі ID та назву жанру відповідну до цего ID.
// Функція повертає стрінгу з назвами фільмів та жанрами до яких цей фільм входить, якщо кількість жанрів більше двох потрібно
//  вивести назву перших двох жанрів і додати надпис 'Others'.
// В результаті маємо отримати:
//
// Films list:
// 1. 'Interceptor: Action, Thriller, Others.'
// 2. 'Fantastic Beasts: The Secrets of Dumbledore: Fantasy, Adventure, Others.'
// 3. 'Last Seen Alive: Action, Thriller.'
// 4. 'Jurassic World Dominion: Science Fiction, Action, Others.'
//
// const films = [
//   {
//     title: "Interceptor",
//     genre_ids: [28, 53, 12],
//   },
//   {
//     title: "Fantastic Beasts: The Secrets of Dumbledore",
//     genre_ids: [14, 12, 28],
//   },
//   {
//     title: "Last Seen Alive",
//     genre_ids: [28, 53],
//   },
//   {
//     title: "Jurassic World Dominion",
//     genre_ids: [878, 28, 12, 53],
//   },
// ];
// const genres = [
//   {
//     id: 28,
//     name: "Action",
//   },
//   {
//     id: 12,
//     name: "Adventure",
//   },
//   {
//     id: 14,
//     name: "Fantasy",
//   },
//   {
//     id: 878,
//     name: "Science Fiction",
//   },
//   {
//     id: 53,
//     name: "Thriller",
//   },
//   {
//     id: 10752,
//     name: "War",
//   },
//   {
//     id: 37,
//     name: "Western",
//   },
// ];
// const list = document.querySelector(".list");

// const listEl = films.map(film => {
  
//   const gener_name = film.genre_ids.map(id => {
    
//     const name = genres.find(item => item.id === id).name
    
//   return name
//   })
//   film.gener_name = gener_name;

//   return `<li><h2>${film.title}</h2><p>${
//     gener_name.length < 3
//       ? gener_name.join(", ")
//       : `${gener_name[0]}, ${gener_name[1]}, Others`
//   }</p></li>`;
//   // console.log(gener_name);
//   console.log(film)
// })

// list.insertAdjacentHTML("beforeend", listEl.join(","));









// {/* <form class="form" action="submit">
//       <input name="input" type="text" />
//       <select name="model">
//         <option value="car">brend</option>
//         <option value="type">model</option>
//       </select>
//       <button type="submit">пошук</button>
//     </form> */}


// const cars = [{
//         car: 'Honda',
//         type: 'Civic',
//         price: 12000,
//         img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU'
// {
//         car: 'Honda',
//         type: 'Accord',
//         price: 20000,
//         img: 'https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg'
//     }, {
//         car: 'Volvo',
//         type: 'XC60',
//         price: 7000,
//         img: 'https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320'
//     }
// ]



// const box = document.querySelector(".list");
// const marcUp = cars.map(
//   (el) => ` <li>
// <img src="${el.img}" alt="${el.car}" width= "300px">
// <h2>${el.car}</h2>
// <h2>${el.type}</h2>
// <p>${el.price}</p>
// </li>`
// );
// box.insertAdjacentHTML("beforeend", marcUp.join(","));
// const form = document.querySelector(".form");
// form.addEventListener("submit", onSubmit);
// function onSubmit(evt) {
//   evt.preventDefault();

//   const input = evt.currentTarget.elements.input.value;
//   const select = evt.currentTarget.elements.model.value;

//   const curenCars = cars.filter(
//     (el) => el[select].toLowerCase() === input.toLowerCase()
//   );

//   const marcUp = curenCars.map(
//     (el) => ` <li>
//   <img src="${el.img}" alt="${el.car}" width= "300px">
//   <h2>${el.car}</h2>
//   <h2>${el.type}</h2>
//   <p>${el.price}</p>
//   </li>`
//   );
//   box.innerHTML = marcUp.join(",");
// }

// мутувати, щоб залишилися лише унікальні id
// якщо однакові Id сплюсувати значення qty
// const products = [{
//     id: 'sku1',
//     qty: 1,
// }, {
//     id: 'sku2',
//     qty: 2,
// }, {
//     id: 'sku3',
//     qty: 3,
// }, {
//     id: 'sku1',
//     qty: 6,
// }, {
//     id: 'sku1',
//     qty: 8,
// }, {
//     id: 'sku2',
//     qty: 19,
// }, {
//     id: 'sku4',
//     qty: 1,
// }]

// for (let i = 0; products.length > i; i += 1) {
//   console.log("поточний продукт", products[i]);
//   for (let j = i + 1; products.length > j; j += 1) {
//     console.log("наступний продукт", products[j]);
//     if (products[i].id === products[j].id) {
//       products[i].qty += products[j].qty;
//       products.splice(j, 1);
//       j -= 1;
//     }
//   }
// }
// console.log(products)

// / Cтворити функцію яка буде приймати 1 параметр та знаходити в масиві елементи що дублюються і потім ці елменти добавляти в новий масив
// 1 масив чисел (arr)
// const numbers = [1, 2, 3, 1, 1, 2, 17, 19]
// function getCommonElements(arr) {
//   for (let i = 0; i < arr.length; i += 1) {
//     const idx = arr.indexOf(arr[i], i + 1);
//     if (idx !== -1) {
//       arr.splice(idx, 1)
//       i -= 1;
//     }
//   }
//   return arr;
// };
// console.log(getCommonElements(numbers));


const content = document.querySelector(".content");
const form = document.querySelector("form")
const firstPlayer = document.querySelector(".first");
const secondPlayar = document.querySelector(".second");
let marcUp = "";
let player = "X";
let muvesPlayarX = [];
let muvesPlayarO = [];
let winArr = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
  
]
for( let i=0; i < 9; i += 1){
marcUp += `<div class="item" data-id = "${i}"></div>`
}
content.insertAdjacentHTML(`beforeend`, marcUp)
console.log(marcUp)
content.addEventListener(`click`,onStart);
function onStart(evt){
    if(!evt.target.classList.contains(`item`)){
        return 
    }

    if(!evt.target.textContent){
      evt.target.textContent = player;
      if (player === "X") {
        muvesPlayarX.push(evt.target.dataset.id);
        if (onWiner(winArr, muvesPlayarX)) {
          alert(firstPlayer.textContent);
        }
        localStorage.setItem("muvesPlayarX", JSON.stringify(muvesPlayarX));
      } else {
        muvesPlayarO.push(evt.target.dataset.id);
        if (onWiner(winArr, muvesPlayarO)) {
          alert(secondPlayer.textContent);
        }
        localStorage.setItem("muvesPlayarO", JSON.stringify(muvesPlayarO));
      }
      player = player === "X" ? "0" : "X";
      localStorage.setItem("currentPlayar", player);
      firstPlayer.classList.toggle("active");
      firstPlayer.classList.toggle("inactive");
      secondPlayar.classList.toggle("active");
      secondPlayar.classList.toggle("inactive");
    } 
};
function onWiner(winArr, playaerArr) {
  const isWiner = winArr.some((item) => item.every((value) => playaerArr.includes(value.toString())));
  console.log(isWiner);
  return isWiner
}

form.addEventListener("submit", onSubmit);

function onSubmit(evt) {
  evt.preventDefault()
  const { first, second } = evt.currentTarget.elements
  console.log(first, second)
  firstPlayer.textContent = first.value;
  secondPlayar.textContent = second.value;
  firstPlayer.classList.add("active");
  secondPlayar.classList.add("inactive");
}

function comeBack() {
  const saveX = JSON.parse(localStorage.getItem("muvesPlayarX")) || [];
  const saveO = JSON.parse(localStorage.getItem("muvesPlayarO")) || [];
  player = localStorage.getItem("currentPlayar") || "X";
  muvesPlayarX = saveX;
  muvesPlayarO = saveO;
  for (const item of content.children) {
    console.log(item);
    if (saveX.length && saveX.includes(item.dataset.id)) {
      item.textContent = "X";
      continue;
    }
    if (saveO.length && saveO.includes(item.dataset.id)) {
      item.textContent = "O";
      continue;
    }
}
}
comeBack();