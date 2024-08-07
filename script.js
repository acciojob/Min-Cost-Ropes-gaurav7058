function mincost(arr) {
    // If there is only one rope, no cost to combine
    if (arr.length <= 1) return 0;

    // Sort the array
    arr.sort((a, b) => a - b);

    let totalCost = 0;

    // Combine ropes until only one remains
    while (arr.length > 1) {
        // Extract the two smallest ropes
        const first = arr.shift();
        const second = arr.shift();

        // Compute the cost to combine these two ropes
        const cost = first + second;
        totalCost += cost;

        // Insert the combined rope back into the sorted list
        // Use binary search to maintain order
        let left = 0;
        let right = arr.length;
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (arr[mid] < cost) left = mid + 1;
            else right = mid;
        }
        arr.splice(left, 0, cost);
    }

    return totalCost;
}

module.exports = mincost;
