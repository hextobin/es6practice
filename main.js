

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

var requests = [
  { url: '/photos', status: 'complete' },
  { url: '/albums', status: 'pending' },
  { url: '/users', status: 'failed' }
];

var inProgress = requests.some(function(request) {
    return request.status === 'pending'
});

var users = [
  { id: 21, hasSubmitted: true },
  { id: 62, hasSubmitted: false },
  { id: 4, hasSubmitted: true }
];

var hasSubmitted = users.every(function(user) {
    return user.hasSubmitted === true
});