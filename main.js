

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

var trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 }
];

var speeds = trips.map(function(trip) {
  return trip.distance / trip.time
});

console.log(speeds)

var paints = [ { color: 'red' }, { color: 'blue'}, { color: 'yellow'}];

function pluck(array, property) {
  var plucked = array.map(function(item) {
    return item[property]
  })
  return plucked
}




