unction countCategories(categories) {
    // Step 1: Use reduce() to count occurrences of each category
    const categoryCounts = categories.reduce((acc, category) => {
        acc[category] = (acc[category] || 0) + 1; // Increment count or initialize to 1
        return acc;
    }, {});

    return categoryCounts;
