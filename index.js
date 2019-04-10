var animal= 'dog'

function myAninal () {
  return animal
}

function yourAninal () {
  var animal = 'cat';
  return animal
}

function add2(n) {
  const two=2 
  return n + two
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}
var theFunk = funkyFunction()

theFunk();
