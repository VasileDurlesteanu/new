function Accumulator(staringValue) {
  this.value = staringValue;

  this.read = function (){
    this.value += +prompt("ADD another value?", 0)
  }
}



let accumulator = new Accumulator(1); // initial value 1

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

alert(accumulator.value); // shows the sum of these values