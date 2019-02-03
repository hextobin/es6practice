

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

var post = { id: 4, title: 'New Post' }
var comments = [
  {postId:4, content: 'awesome post' },
  {postId:3, content: 'it was ok' },
  {postId:4, content: 'neat' },
]

function commentsForPost(post, comments) {
  return comments.filter(function(comment) {
    return post.id === comment.postId
  })
}

console.log(commentsForPost(post, comments))


