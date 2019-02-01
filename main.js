

var colors = ['red', 'blue', 'green']

for( var i = 0; i < colors.length; i++) {
  console.log(colors[i])
}

colors.forEach(function(color){
  console.log(color)
})

// create array of numbers
var numbers = [1,2,3,4,5]
// variable to hold  sum
var sum = 0

function adder(number){
  sum += number
}
// loop over array, incrementing the sum variable
numbers.forEach(adder)
// print the sum variable
console.log(sum)
