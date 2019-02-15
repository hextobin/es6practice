
// var colors = ['red', 'blue', 'green']

// for( var i = 0; i < colors.length; i++) {
//   console.log(colors[i])
// }

// colors.forEach(function(color){
//   console.log(color)
// })

// // create array of numbers
// var numbers = [1,2,3,4,5]
// // variable to hold  sum
// var sum = 0

// function adder(number){
//   sum += number
// }
// // loop over array, incrementing the sum variable
// numbers.forEach(adder)
// // print the sum variable
// console.log(sum)

// **************************
// function handlePosts() {
//   var posts = [
//     { id: 23, title: 'Daily JS News' },
//     { id: 52, title: 'Code Refactor City' },
//     { id: 105, title: 'The Brightest Ruby' }
//   ];

//   // for (var i = 0; i < posts.length; i++) {
//   //   savePost(posts[i]);
//   // }
//   posts.forEach(function(){
//       savePost(posts[i]);
//   });
// }
// **********************************

// var images = [
//   { height: 10, width: 30 },
//   { height: 20, width: 90 },
//   { height: 54, width: 32 }
// ];
// var areas = [];

// images.forEach(function(image){
//     areas.push(image['height'] * image['width']);
// });
// *********************************

// var numbers = [1,2,3]
// var doubledNumbers = []
// for (var i = 0; i < numbers.length; i++) {
//   doubledNumbers.push(numbers[i] * 2)
// }

// var doubled = numbers.map(function(number) {
//   return number * 2
// })

// console.log(doubledNumbers)
// console.log(doubled)
// *******************************

// var cars = [
//   { model: 'Model T', price: 'CHEAP' },
//   { model: 'camaro', price: 'expensive' },
// ]

// var prices = cars.map(function(car) {
//   return car.price
// })

// console.log(prices)

// var images = [
//   { height: '34px', width: '39px' },
//   { height: '54px', width: '19px' },
//   { height: '83px', width: '75px' },
// ];

// var heights = images.map(function(image) {
//   return image.height
// });

// console.log(heights)

// var trips = [
//   { distance: 34, time: 10 },
//   { distance: 90, time: 50 },
//   { distance: 59, time: 25 }
// ];

// var speeds = trips.map(function(trip) {
//   return trip.distance / trip.time
// });

// console.log(speeds)

// var paints = [ { color: 'red' }, { color: 'blue'}, { color: 'yellow'}];

// function pluck(array, property) {
//   var plucked = array.map(function(item) {
//     return item[property]
//   })
//   return plucked
// }

// ******************************

// var products = [
//   { name: 'cucumber', type: 'vegetable', quantity: 0, price: 1},
//   { name: 'banana', type: 'fruit', quantity: 10, price: 15},
//   { name: 'celery', type: 'vegetable', quantity: 30, price: 13},
//   { name: 'orange', type: 'fruit', quantity: 3, price: 5},
// ]

// // type is vegetable, quantity > 0, price < 10

// let vegArr = products.filter(function(product) {
//   return (product.type === 'vegetable'
//   && product.quantity > 0
//   && product.price < 14)
// })

// console.log(vegArr)

// var filteredProducts = []

// for(var i = 0; i < products.length; i++) {
//   if(products[i].type === 'fruit') {
//     filteredProducts.push(products[i])
//   }
// }

// console.log(filteredProducts)

// filteredProducts =  products.filter(function(product) {
//   return product.type === 'fruit'
// })
// console.log(filteredProducts)

// var post = { id: 4, title: 'New Post' }
// var comments = [
//   {postId:4, content: 'awesome post' },
//   {postId:3, content: 'it was ok' },
//   {postId:4, content: 'neat' },
// ]

// function commentsForPost(post, comments) {
//   return comments.filter(function(comment) {
//     return post.id === comment.postId
//   })
// }

// console.log(commentsForPost(post, comments))

// numbers greater than 50

// var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

// var filteredNumbers = numbers.filter(function(number) {
//     return number > 50
// });

// // returning admin users

// var users = [
//   { id: 1, admin: true },
//   { id: 2, admin: false },
//   { id: 3, admin: false },
//   { id: 4, admin: false },
//   { id: 5, admin: true },
//  ];

//  var filteredUsers = users.filter(function(user) {
//      return user.admin === true
//  });

// //  reject function

// function reject(array, iteratorFunction) {
//   return array.filter(function(item){
//       return !iteratorFunction(item)
//   })
// }
// *******************************

// var users = [
//   { name: 'Jill' },
//   { name: 'Alex' },
//   { name: 'Bill' },
// ]

// var user

// user = users.find(function(user) {
//   return user.name === 'Alex'
// })

// console.log(user)

// function Car(model) {
//   this.model = model
// }

// var cars = [
//   new Car('Buick'),
//   new Car('Camaro'),
//   new Car('Focus'),
// ]

// var car = cars.find(function(car) {
//   return car.model === 'Camaro'
// })

// console.log(car)

// var posts = [
//   { id: 1, title: 'New Post' },
//   { id: 2, title: 'Old Post' },
// ]

// var comment = { postId: 1, content: 'Great Post' }

// function postForComment(posts, comment) {
//   return posts.find(function(post) {
//     return post.id === comment.postId
//   })
// }

// console.log(postForComment(posts, comment))

// var users = [
//   { id: 1, admin: false },
//   { id: 2, admin: false },
//   { id: 3, admin: true }
// ];

// var admin = users.find(function(user) {
//     return user.admin === true
// });

// var accounts = [
//   { balance: -10 },
//   { balance: 12 },
//   { balance: 0 }
// ];

// var account = accounts.find(function(account) {
//     return account.balance === 12
// });

// function findWhere(array, criteria) {
//   var property = Object.keys(criteria)[0]
//   return array.find(function(element) {
//       return element[property] === criteria[property]
//   })
// }

// *********************************************

// var computers = [
//   { name: 'Apple', ram: 24 },
//   { name: 'Compaq', ram: 4 },
//   { name: 'Acer', ram: 32 },
// ]

// var allcomputersCanRunProgram = computers.every(function(computer) {
//   return computer.ram >= 16
// })

// console.log(allcomputersCanRunProgram)

// var someComputersCanRunProgra = computers.some(function(computer) {
//   return computer.ram <= 16
// })

// console.log(someComputersCanRunProgra)

// var names = [
//   "Alexandria",
//   "Matthew",
//   "Joe",
// ]

// var everyLength = names.every(function(name) {
//   return name.length > 4
// })

// var someLength = names.some(function(name) {
//   return name.length > 4
// })

// console.log(everyLength)
// console.log(someLength)

// function Field(value) {
//   this.value = value
// }

// Field.prototype.validate = function() {
//   return this.value.length > 0
// }

// var username = new Field("2cool")
// var password = new Field("my_password")
// var birthdate = new Field("10/10/1900")

// var fields = [username, password, birthdate]

// var fieldValidation = fields.every(function(field) {
//   return field.validate()
// })

// console.log(fieldValidation)

// var requests = [
//   { url: '/photos', status: 'complete' },
//   { url: '/albums', status: 'pending' },
//   { url: '/users', status: 'failed' }
// ];

// var inProgress = requests.some(function(request) {
//     return request.status === 'pending'
// });

// var users = [
//   { id: 21, hasSubmitted: true },
//   { id: 62, hasSubmitted: false },
//   { id: 4, hasSubmitted: true }
// ];

// var hasSubmitted = users.every(function(user) {
//     return user.hasSubmitted === true
// });

// *****************************

// var numbers = [ 10, 20 , 30 ]
// var sum = 0

// for (var i = 0; i < numbers.length; i++) {
//   sum += numbers[i]
// }

// var foo = numbers.reduce(function(sum, number) {
//   return sum + number
// }, 0)

// console.log(foo)

// var primaryColors = [
//   { color: 'red'},
//   { color: 'yellow'},
//   { color: 'blue'},
// ]

// var prim = primaryColors.reduce(function(previous, primaryColor) {
//   previous.push(primaryColor.color)
//   return previous
// }, [])

// console.log(prim)

// function balancedParens(string) {
//   return !string.split("").reduce(function(previous, char) {
//     if (previous < 0) { return previous }
//     if(char === "(") {
//       return ++previous
//     }
//     if(char === ")") {
//       return -- previous
//     }
//     return previous
//   }, 0)
// }

// console.log(balancedParens(")()()()("))

// var trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];

// var totalDistance = trips.reduce(function(acc, trip) {
//     return acc + trip.distance
// }, 0);

// var desks = [
//   { type: 'sitting' },
//   { type: 'standing' },
//   { type: 'sitting' },
//   { type: 'sitting' },
//   { type: 'standing' }
// ];

// var deskTypes = desks.reduce(function(obj, desk) {
//     if(desk.type === 'sitting') {
//         ++obj.sitting
//     }
//     if(desk.type === 'standing') {
//         ++obj.standing
//     }
//     return obj
// }, { sitting: 0, standing: 0 });

// function unique(array) {
//   return array.reduce(function(prev, el) {
//     var newItem = prev.find(function(prevEl) {
//       return prevEl === el
//     })
//     if( newItem !== el ) {
//       prev.push(el)
//     }
//     return prev
//   }, [])
// }

// **************************
// const name = 'Jane'
// let title = 'Software Engineer'
// let hourlyWage = 40

// for(let i of Array(100).keys()) {
//   console.log( i )
// }

// function getMessage() {
//   return `The year is ${new Date().getFullYear()}`
// }

// console.log(getMessage())

// function doubleMessage(number) {
//   return `Your number doubled is ${2 * number}`;
// }

// function fullName(firstName, lastName) {
//   return `${firstName} ${lastName}`;
// }

// // implicit return
// const add = (a, b) => a + b

// console.log(add(1,2))

// // can omit parens if only one argument
// const double = number => 2 * number

// console.log(double(8))

// const numbers = [1,2,3]

// console.log(numbers.map(number => 2 * number))

// // makes use of lexical this
// const team = {
//   members: ['Jane', 'Bill'],
//   teamName: 'Super Squad',
//   teamSummary: function() {
//     return this.members.map((member) => {
//       return `${member} is on team ${this.teamName}`
//     })
//   }
// }

// console.log(team.teamSummary())

// const fibonacci = n => {
//   if (n < 3) return 1;
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }

// const profile = {
//   name: 'Alex',
//   getName: function() {
//       return this.name
//   }
//   // getName: () => {
//   //   console.log(this)
//   // }
// };

// profile.getName()

// ******************************

// function createBookShop(inventory) {
//   return {
//     inventory,
//     inventoryValue() {
//       return this.inventory.reduce((total, book) => total + book.price, 0)
//     },
//     priceForTitle(title) {
//       return this.inventory.find((book) => book.title === title).price
//     }
//   }
// }

// const inventory = [
//   { title: 'Harry Potter', price: 10 },
//   { title: 'City of Thieves', price: 15 },
// ]

// const bookShop = createBookShop(inventory)

// console.log(bookShop.inventoryValue())
// console.log(bookShop.priceForTitle('City of Thieves'))

// function saveFile() {
//   $.ajax({
//     url,
//     data,
//     method: 'POST'
//   })
// }

// const url = 'http://fileupload.com'
// const data = { color: 'red' }

// const red = '#ff0000';
// const blue = '#0000ff';

// const COLORS = { red, blue };

// const fields = ['firstName', 'lastName', 'phoneNumber'];

// const props = { fields };

// const canvasDimensions = function(width, initialHeight) {
//   const height = initialHeight * 9 /16;
//   return {
//     width,
//     height
//   };
// }

// const color = 'red';

// const Car = {
//   color,
//   drive() {
//     return 'Vroom!';
//   },
//   getColor() {
//     return this.color;
//   }
// };

// saveFile(url, data)

// **************
// default function argument
// function makeAjaxRequest (url, method = 'GET') {
//   return method
// }

// console.log(makeAjaxRequest('google.com', 'POST'))
// console.log(makeAjaxRequest('google.com', 'GET'))

// function User (id) {
//   this.id = id
// }

// function generateId () {
//   return Math.random() * 999999
// }
// function createAdminUser (user = new User(generateId())) {
//   user.admin = true
// }

// createAdminUser()

// function sum (a = 0, b = 0) {
//   return a + b
// }

// function addOffset (style = {}) {
//   style.offset = '10px'
//   return style
// }
// ************************
// function addNumbers (...numbers) {
//   return numbers.reduce((sum, number) => {
//     return sum + number
//   }, 0)
// }

// console.log(addNumbers(1, 2, 3, 4, 5, 6, 7)

// const defaultColors = ['red', 'green']
// const userFavoriteColors = ['orange', 'yellow']

// console.log([ ...defaultColors, ...userFavoriteColors, 'blue' ])

// function validateShoppingList (...items) {
//   if (items.indexOf('milk') < 0) {
//     return [ 'milk', ...items ]
//   }
// }

// console.log(validateShoppingList('oranges', 'bread', 'eggs'))

// const MathLibrary = {
//   calculateProduct (...rest) {
//     console.log('Please use the multiply method instead')
//     return this.multiply(...rest)
//   },
//   multiply (a, b) {
//     return a * b
//   }
// }

// function product (...rest) {
//   var numbers = [...rest]

//   return numbers.reduce(function (acc, number) {
//     return acc * number
//   }, 1)
// }

// function join (array1, array2) {
//   return [...array1, ...array2]
// }

// function unshift (array, ...rest) {
//   return [...rest, ...array]
// }

// let expense = {
//   type: 'Business',
//   amount: '$45 USD'
// }

// const { type, amount } = expense
// console.log(type, amount)

// let savedFile = {
//   extension: 'jpg',
//   name: 'repost',
//   size: 14040
// }

// function fileSummary ({ name, extension, size }, { color }) {
//   return `The file ${color}  ${name}.${extension} is of size ${size}`
// }

// console.log(fileSummary(savedFile, { color: 'red' }))

// const companies = [
//   'Google',
//   'Facebook',
//   'Uber'
// ]

// const [ name, name2, ...rest ] = companies
// console.log(name2)
// const { length } = companies
// console.log(length)

// const companies = [
//   { name: 'Google', location: 'Mountain View' },
//   { name: 'Facebook', location: 'Menlo Park' },
//   { name: 'Uber', location: 'San Francisco' }
// ]

// // mixing array and object destructuring
// const [{ location }] = companies
// console.log(location)

// const Google = {
//   locations: ['Mountian View', 'New York', 'London']
// }

// const { locations: [ location, location2, ...rest ] } = Google

// console.log(location, rest)

function signup ({ username, password, email, dateOfBirth, city }) {
}

const user = {
  username: 'myname',
  password: 'password',
  email: 'myemail@example.com',
  dateOfBirth: '1/1/1900',
  city: 'New York'
}

signup(user)

const points = [
  [4, 5],
  [10, 1],
  [0, 40]
]

// destructuring arguments
points.map(([ x, y ]) => {
  return { x, y }
})