let age = 25;

// Step 2: Create a function `displayAge` that logs the value of `age`
function displayAge() {
    console.log(`The current age is: ${age}`);
}

// Step 3: Create a function `changeAge` that updates the value of `age`
function changeAge(newAge) {
    age = newAge; // Updates the global variable `age`
    console.log(`The age has been updated to: ${age}`);
}

// Step 4: Call `displayAge` and `changeAge` to demonstrate the concept
displayAge(); // Logs: The current age is: 25
changeAge(30); // Logs: The age has been updated to: 30
displayAge(); // Logs: The current age is: 30
