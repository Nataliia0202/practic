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


// const content = document.querySelector(".content");
// const form = document.querySelector("form")
// const firstPlayer = document.querySelector(".first");
// const secondPlayar = document.querySelector(".second");
// let marcUp = "";
// let player = "X";
// let muvesPlayarX = [];
// let muvesPlayarO = [];
// let winArr = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   [0, 4, 8],
//   [2, 4, 6]
  
// ]
// for( let i=0; i < 9; i += 1){
// marcUp += `<div class="item" data-id = "${i}"></div>`
// }
// content.insertAdjacentHTML(`beforeend`, marcUp)
// console.log(marcUp)
// content.addEventListener(`click`,onStart);
// function onStart(evt){
//     if(!evt.target.classList.contains(`item`)){
//         return
//     }

//     if(!evt.target.textContent){
//       evt.target.textContent = player;
//       if (player === "X") {
//         muvesPlayarX.push(evt.target.dataset.id);
//         if (onWiner(winArr, muvesPlayarX)) {
//           alert(firstPlayer.textContent);
//         }
//         localStorage.setItem("muvesPlayarX", JSON.stringify(muvesPlayarX));
//       } else {
//         muvesPlayarO.push(evt.target.dataset.id);
//         if (onWiner(winArr, muvesPlayarO)) {
//           alert(secondPlayer.textContent);
//         }
//         localStorage.setItem("muvesPlayarO", JSON.stringify(muvesPlayarO));
//       }
//       player = player === "X" ? "0" : "X";
//       localStorage.setItem("currentPlayar", player);
//       firstPlayer.classList.toggle("active");
//       firstPlayer.classList.toggle("inactive");
//       secondPlayar.classList.toggle("active");
//       secondPlayar.classList.toggle("inactive");
//     }
// };
// function onWiner(winArr, playaerArr) {
//   const isWiner = winArr.some((item) => item.every((value) => playaerArr.includes(value.toString())));
//   console.log(isWiner);
//   return isWiner
// }

// form.addEventListener("submit", onSubmit);

// function onSubmit(evt) {
//   evt.preventDefault()
//   const { first, second } = evt.currentTarget.elements
//   console.log(first, second)
//   firstPlayer.textContent = first.value;
//   secondPlayar.textContent = second.value;
//   firstPlayer.classList.add("active");
//   secondPlayar.classList.add("inactive");
// }

// function comeBack() {
//   const saveX = JSON.parse(localStorage.getItem("muvesPlayarX")) || [];
//   const saveO = JSON.parse(localStorage.getItem("muvesPlayarO")) || [];
//   player = localStorage.getItem("currentPlayar") || "X";
//   muvesPlayarX = saveX;
//   muvesPlayarO = saveO;
//   for (const item of content.children) {
//     console.log(item);
//     if (saveX.length && saveX.includes(item.dataset.id)) {
//       item.textContent = "X";
//       continue;
//     }
//     if (saveO.length && saveO.includes(item.dataset.id)) {
//       item.textContent = "O";
//       continue;
//     }
// }
// }
// comeBack();
// const BASE_URL = "https://api.themoviedb.org/3/";
// const apiKey = "8206ec9c710e1cb5a1a578e3e785930f";

// const movie = "movie";

  // fetch(
  //   "https://api.themoviedb.org/3/discover/movie?api_key=27a76f0869afd59eafccef7d6d986c20&language=en-US&sort_by=popularity.desc&page=1&primary_release_year=2022&with_genres=comedy&query=movie&week"
  // ).then((response) => {
  //   if (!response.ok) {
  //     throw new Error("fail");
  //   }
  //   const resp = response.json();
  //   console.log(JSON.parse(resp));
  //   return resp;
  // });


//   fetch(
//     "https://api.themoviedb.org/3/movie/150?api_key=8206ec9c710e1cb5a1a578e3e785930f&language=en-US"
//   ).then((response) => {
//     if (!response.ok) {
//       throw new Error("fail");
//     }
//     return response.json();
//   });

//   fetch(
//     "https://api.themoviedb.org/3/trending/all/day?api_key=8206ec9c710e1cb5a1a578e3e785930f"
//   ).then((response) => {
//     if (!response.ok) {
//       throw new Error("fail");
//     }
//     return response.json();
//   });

//   fetch(
//     "https://api.themoviedb.org/3/search/movie?api_key=8206ec9c710e1cb5a1a578e3e785930f&language=en-US&page=1&primary_release_year=2020"
//   ).then((response) => {
//     if (!response.ok) {
//       throw new Error("fail");
//     }
//     return response.json();
//   });

//   fetch(
//     "https://api.themoviedb.org/3/discover/movie?api_key=27a76f0869afd59eafccef7d6d986c20&language=en-US&page=1&with_genres=14"
//   ).then((response) => {
//     if (!response.ok) {
//       throw new Error("fail");
//     }
//     return response.json();
//   });

//  function takeGenresList() {
//   try {
//     const responce = fetch(
//       `https://api.themoviedb.org/3/genre/movie/list?api_key=27a76f0869afd59eafccef7d6d986c20&language=en-US`
//     );
//     const data = responce.json().JSON.parse(data);
    
//     console.log(data);
//     return data;
    
//   } catch (error) {
//     console.log(error);
//   }
// }



// 888888888888888888888888888888888888
// Автопроверка
// function checkForSpam(message) {
//   let result;
//   // Change code below this line
//   let temp = message.toLowerCase();
//   result = temp.includes("spam") || temp.includes("sale");
//   // Change code above this line
//   return result;
// }
// console.log(checkForSpam("Latest technology news"));

// const productName = "Droid";
// const pricePerItem = 3500;

// // Change code below this line
// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;

// console.log(message)


// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;

// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;

// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
// console.log(message)

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);

// for (const key of keys) {
//   // Ключ
//   console.log(key);
//   // Значение свойства
//   console.log(book[key]);
// }

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'rating']

// const values = Object.values(book);
// console.log(values); // ['The Last Kingdom', 'Bernard Cornwell', 8.38]


// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "На берегу спокойных вод",
//     author: "Роберт Шекли",
//     rating: 8.51,
//   },
//   {
//     title: "Сон смешного человека",
//     author: "Федор Достоевский",
//     rating: 7.75,
//   },
// ];

// for (const book of books) {
//   // Объект книги
//   console.log(book);
//   // Название
//   console.log(book.title);
//   // Автор
//   console.log(book.author);
//   // Рейтинг
//   console.log(book.rating);
// }

// const bookNames = [];

// for (const book of books) {
//   bookNames.push(book.title);
// }

// console.log(bookNames);



// function areYouPlayingBanjo(name) {
  
//   if (name[0] === 'R' || name[0] === 'r') {
//     return `${name} plays banjo`;
//   }
//   return `${name} does not play banjo`;
// }

// console.log(areYouPlayingBanjo("Adam"));
// console.log(areYouPlayingBanjo("Ringo"));

// function descendingOrder(n) {
//   if (n >= 0) {
// return Number(n
//   .toString()
//   .split("")
//   .sort((a, b) => b - a)
//   .join(""))
//   }
  
// }
// console.log(descendingOrder(1021));

// function XO(str) {
//   const str1 = str.toLowerCase();
//   const arr = str1.split('');
//   const countX = arr.reduce( (n, val) => {
//     return n + (val === "x");
//   }, 0);
//   const countO = arr.reduce((n, val) => {
//     return n + (val === "o");
//   }, 0);
  
//   if (countX === countO) {
//     return true
//   } else {
//     return false
//   }
  
// }
// console.log(XO("xxxm"));


// function findAverage(array) {

//   if (array.length > 0) {
//     const sum = array.reduce((acc, num) => {
//       return acc + num / array.length;
//     }, 0);
//     console.log(sum);
//   } else {
//     return 0;
//   }

// }
// console.log(findAverage([]));

// function sumTwoSmallestNumbers(numbers) {
//   let min = numbers[0];
//   let secondMin = numbers[1];
//   for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] < min) {
//       secondMin = min;
//       min = numbers[i];
//     } else if (numbers[i] < secondMin) {
//       secondMin = numbers[i];
//     }
//   }
//   return min + secondMin;
// }

// console.log(findAverage([5, 8, 12, 19, 22]));

// function squareSum(numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i += 1) {
//     // console.log(numbers[i]);
//     // console.log(Math.pow(numbers[i], 2));
//     sum += Math.pow(numbers[i], 2);

//   }
//   return sum
// }

// console.log(squareSum([1, 2, 2]));

// function sortArray(array) {
//  const odd = array.filter((x) => x % 2).sort((a, b) => a - b);
//  return array.map((x) => (x % 2 ? odd.shift() : x));
//   }


// console.log(sortArray([5, 3, 1, 8, 0]));

// function duplicateCount(text) {
// return text
//   .toLowerCase()
//   .split("")
//   .filter((val, i, arr) => {
//     return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
//   }).length;
// }

// console.log(duplicateCount("aabBcde"));

// function sumArray(array) {
//   if (array && array.length > 1) {
//     const sortedArray = array.sort((a, b) => a - b).slice(1, -1);
//     console.log(sortedArray)
//     return sortedArray.reduce((acc, cur) => acc + cur, 0);
//   }

//   return 0;
// }

// console.log(sumArray([0, 1, 6, 10, 10]));

// function sumMix(x) {
//   let sum = 0;
//   for (let i = 0; i < x.length; i += 1) {
//     sum += Number(x[i]);
//   }
//   return sum;
// }

// console.log(sumMix([9, 3, "7", "3"]));

// const quarterOf = (month) => {
//   if (month <= 3) {
//     return 1;
//   } else if (6 >= month && month > 3) {
//     return 2;
//   } else if (9 >= month && month > 6) {
//     return 3;
//   } else if (12 >= month && month > 9) {
//     return 4;
//   }
//   };

// console.log(quarterOf(12));

// function wave(str) {
//   let result = [];
//   if ([...str].length === 0) return [];
//   for (let i = 0; i < str.length; i++) {
//     let copy = str.split("");
//     if (copy[i] === " ") continue;
//     copy[i] = copy[i].toUpperCase("");
//     result.push(copy.join(""));
//   }
//   return result;
// }

// const reverseSeq = (n) => {
//   const arr = Array.from({ length: n }, (_, index) => index + 1);
//   return arr.sort((a, b) => b - a);
// };

// console.log(reverseSeq(10));

// function reverseWords(str) {
  
//   return str.split('').reverse().join('').split(' ').reverse().join(' ')
// }

// console.log(reverseWords("double  spaced  words"));


// function removeSmallest(numbers) {
//   //make a copy of the original array without mutation
//   const copy = numbers.slice(0);
//   //find the smallest value in the array
//   let smallestValue = numbers.indexOf(Math.min(...numbers));
//   console.log(smallestValue);
//   //Remove the smallest element in the array
//   copy.splice(smallestValue, 1);
//   //Return the array without the smallest element
//   return copy;
// }

// console.log(removeSmallest([5, 3, 2, 1, 4]));

// function printerError(s) {
//   let count = 0;
//   for (let i =0; i < s.length; i += 1) {
//     if (s[i] > "m") {
//        count += 1;
//     }
      
//   }
//   return count+"/"+s.length;
// }

// console.log(
//   printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz")
// );

// function findShort(s) {
//   return Math.min(...s.split(" ").map((word) => word.length));
  
//  }

// console.log(findShort("Let's travel abroad shall we"));

// function check(a, x) {
//   if (a.includes(x)) {
//     return true
//   } else {
//     return false
//   }
// }
// console.log(check([101, 45, 75, 105, 99, 107], 107));

// function maps(x) {
//   const newAr = x.map(elem => {
//    return elem * 2
//     console.log(elem)
//   })
//   return newAr
//   console.log(newAr)
//  }

// function solution(string) {
//   let splitStr = string.split("");
//   console.log(splitStr);
//   let newStr = string.split("");
//   console.log(newStr);
//   let capStr = string.toUpperCase().split("");
//   console.log(capStr);
//   for (i = splitStr.length - 1; i >= 0; i--) {
//     if (splitStr[i] === capStr[i]) {
//       newStr.splice(i, 0, " ");
//     }
//   }
//   return newStr.join("");
//  }

// console.log(solution("camelCasing"));

// function findNeedle(haystack) {
//   for (i = 0; i < haystack.length; i++) {
//     if (haystack[i] === "needle") {
//       return "found the needle at position " + i;
//     }
//   }
//  }


// console.log(
//   findNeedle([
//     "3",
//     "123124234",
//     undefined,
//     "needle",
//     "world",
//     "hay",
//     2,
//     "3",
//     true,
//     false,
//   ])
// );

// function points(games) {
 

//  let total = 0;
//   games.map((game) => {
//   //  console.log(game);
//    if (game[0] === game[2]) {
//      console.log(game[2]);
//      total += 1;
//    } else if (game[0] > game[2]) {
//      total += 3;
//    }
//  });
//  return total;
// }
// console.log(
//   points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"])
// );

// function count(string) {
//   let arr = string.split('')
//   console.log(arr);
//   return arr.reduce((acc, num) => {
//     if (!acc.hasOwnProperty(num)) {
//       acc[num] = 0;
//     }
//     acc[num] += 1;

//     return acc;
//   }, {});
 
// }

// console.log(count("aba"));

// const uniqueInOrder = function (iterable) {
//   const arr = iterable.split('');
//   const result = [];
//   console.log(arr)
//   for (let i = 0; i <= arr.length; i += 1) {
//     if (arr[i] !== arr[i+1]) {
//       result.push(arr[i])
//     }
//   }
//   return result;
// };
// console.log(uniqueInOrder("AAAABBBCCDAABBB"));

// function longest(s1, s2) {
//   const string = (s1 + s2).split('');
//   const result = [];
//   console.log(string);
//    for (let i = 0; i <= string.length; i += 1) {
//      if (!result.includes(string[i])) {
//        result.push(string[i]);
//      }
//   }
//   return result.sort().join('')
 
// }
// console.log(longest("aretheyhere", "yestheyarehere"));

// function correct(string) {
//   // your code here
//   const arr = string.split('');
//   console.log(arr);
//   for (let i = 0; i <= arr.length; i += 1) {
//     if (arr[i] === '0') {
//       arr[i] = 'O'
//     } else if (arr[i] === '1') {
//       arr[i] = "I";
//     } else if (arr[i] === '5') {
//       arr[i] = "S";
//     }
//   }
//   return arr.join('')
// }
// console.log(correct("L0ND0N"));

// function abbrevName(name) {
//   const arr = name.split('');
//   const result = [];
//   console.log(arr);
//   arr.forEach(element => {
    
//     if (element === element.toUpperCase()&& element !==' ' ) {
//       result.push(element)
//     }
//   });
//   return result.join('.')
// }
// console.log(abbrevName("Sam Harris"));

// function filter_list(l) {
//   let arr = [];
//   for (let i = 0; i <= l.length; i += 1) {
//     if (Number.isNaN(l[i])) {
//       arr.push(l[i])
//     }
//   }
//   return arr;
// }
// console.log(filter_list([1, 2, "a", "b"]));

// class SmallestIntegerFinder {
//   findSmallestInt(args) {
    
    
//     return Math.min(...args);
//   }
// }

// const sif = new SmallestIntegerFinder((args = []));
// console.log(sif)

// console.log(sif.findSmallestInt([78, 56, 232, 12, 0]));


// function calculateYears(principal, interest, tax, desired) {
//   for (var years = 0; principal < desired; years++) {
//     principal += principal * interest * (1 - tax);
//   }
//   return years;
// }
// console.log(calculateYears(1000, 0.05, 0.18, 1000)); // 0
// calculateYears(1000, 0.05, 0.18, 1100);

// function dirReduc(plan) {
//   var opposite = {
//     'NORTH': 'SOUTH',
//     'EAST': 'WEST',
//     'SOUTH': 'NORTH',
//     'WEST': 'EAST'
//   };
//   return plan.reduce(function(dirs, dir){
//       if (dirs[dirs.length - 1] === opposite[dir])
//         dirs.pop();
//       else
//         dirs.push(dir);
//       return dirs;
//     }, []);
// }
// console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]));

// function fakeBin(x) {
//    return ("" + x).replace(/[0-4]/g, "0").replace(/[5-9]/g, "1");
// }

// console.log(fakeBin("366058562030849490134388085"));

// function findDifference(a, b) {
//   // const sum = 0;
//   const totalA = a.reduce((previousValue, number) => {
//     return previousValue * number;
//   }, 1);
//   console.log(totalA);
//   const totalB = b.reduce((previousValue, number) => {
//     return previousValue * number;
//   }, 1);
//   console.log(totalB);
//   const sum = totalA > totalB ? totalA - totalB : totalB - totalA;
//   return sum
// }

// console.log(findDifference([3, 2, 5], [1, 4, 4]));

for (let i = 1; i < humanYears.length; i += 1){
  let catYears = 0;
  let dogYears = 0;
  const yers=[]
    if (humanYears === 1) {
      catYears = 15;
      dogYears = 15;
      yers.push(humanYears, catYears, dogYears);
    } else if (humanYears === 2) {
      catYears = 24;
      dogYears = 24;
      yers.push(humanYears, catYears, dogYears);
    } else if (humanYears >= 3) {
      catYears += 4;
      dogYears += 5;
      yers.push(humanYears, catYears, dogYears);
  }
  
  
   return yers;
}
  console.log(humanYearsCatYearsDogYears(2));
 
