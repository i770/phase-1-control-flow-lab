

// Function to return greeting based on feet
function scuberGreetingForFeet(feet) {
  if (feet <= 400) {
    return 'This one is on me!';
  } else if (feet > 2000 && feet <= 2500) {
    return 'I will gladly take your thirty bucks.';
  } else if (feet > 2500) {
    return 'No can do.';
  } else if (feet > 400 && feet <= 2000)
    return 'That will be twenty bucks.';
  }


// Function to return response based on city using ternary operator
function ternaryCheckCity(city) {
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

// Function to return response based on tip using switch statement
function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
}

// Example usage
console.log(scuberGreetingForFeet(350)); // This one is on me!
console.log(scuberGreetingForFeet(2200)); // I will gladly take your thirty bucks.
console.log(scuberGreetingForFeet(3000)); // No can do.

console.log(ternaryCheckCity('NYC')); // Ok, sounds good.
console.log(ternaryCheckCity('LA')); // No go.

console.log(switchOnCharmFromTip('generous')); // Thank you so much.
console.log(switchOnCharmFromTip('not as generous')); // Thank you.
console.log(switchOnCharmFromTip('no tip')); // Bye.
