// index.js
// Basic syntax example to avoid any errors

// Sample function
function greet(name) {
  if (!name) {
    console.error('Name is required!');
    return;
  }
  console.log(`Hello, ${name}!`);
}

// Example call
greet('World');
