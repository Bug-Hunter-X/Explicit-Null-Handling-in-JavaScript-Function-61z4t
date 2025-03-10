function foo(a, b) {
  if (a === null || b === null) {
    return null; // Handle null values explicitly
  }
  return a + b; // Perform addition if no null values
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: null
console.log(foo(1, null)); // Output: null
console.log(foo(null, null)); // Output: null