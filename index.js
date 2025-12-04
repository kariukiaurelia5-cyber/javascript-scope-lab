// Write your solution in this file!

// Step 1: Global scope variables
const burgers = ['Hamburger', 'Cheeseburger'];
let featuredDrink = 'Strawberry Milkshake';

// Step 2: Function that adds a function-scoped burger
function addBurger() {
  // declared with const inside the function
  const newBurger = 'Flatburger';
  burgers.push(newBurger);
}

// Step 3: Block-scoped addition inside an if block that always runs
if(true) {
  const anotherNewBurger = 'Maple Bacon Burger';
  burgers.push(anotherNewBurger);
}

// Step 4: Function to change the featured drink (modifies global variable)
function changeFeaturedDrink() {
  featuredDrink = 'The JavaShake';
}


