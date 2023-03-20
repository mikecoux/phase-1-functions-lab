// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    //returns the number of blocks given a value
    if (someValue < 42) {
        return 42 - someValue
    } else if (someValue > 42){
        return someValue - 42
    }else{
        return 0
    }
}

function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264;
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  
    // the return value of distanceFromHqInBlocks can then be used to calculate feet

  }

  function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    return (Math.abs(start - destination)) * 264;
  }

  function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    if (distanceTravelledInFeet(start, destination) <= 400){
        return 0
    }else if (distanceTravelledInFeet(start, destination) <= 2000){
        return (distanceTravelledInFeet(start, destination)-400) * 0.02
    }else if (distanceTravelledInFeet(start, destination) < 2500){
        return 25
    }else {
        return "cannot travel that far"
    }
  }