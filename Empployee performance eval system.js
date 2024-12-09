function evaluateEmployees(employees) {
    // Step 1: Filter employees who have completed more than 5 tasks
    const filteredEmployees = employees.filter(employee => employee.tasksCompleted > 5);

    // Step 2: Map the filtered employees to include name and performance level
    const mappedEmployees = filteredEmployees.map(employee => {
        let performance;
        if (employee.rating > 4.5) {
            performance = "Excellent";
        } else if (employee.rating >= 3 && employee.rating <= 4.5) {
            performance = "Good";
        } else {
            performance = "Needs Improvement";
        }
        return { name: employee.name, performance };
    });

    // Step 3: Sort employees based on performance level in descending order
    const sortedEmployees = mappedEmployees.sort((a, b) => {
        const performanceOrder = { Excellent: 3, Good: 2, "Needs Improvement": 1 };
        return performanceOrder[b.performance] - performanceOrder[a.performance];
    });

    // Return the sorted array
    return sortedEmployees;
}

// Example Input
const employees = [
    { name: "Alice", tasksCompleted: 8, rating: 4.7 },
    { name: "Bob", tasksCompleted: 4, rating: 4.0 },
    { name: "Charlie", tasksCompleted: 6, rating: 3.5 },
    { name: "David", tasksCompleted: 10, rating: 4.9 },
    { name: "Eve", tasksCompleted: 7, rating: 2.8 }
];

// Call the function and log the output
const result = evaluateEmployees(employees);
console.log(result);
