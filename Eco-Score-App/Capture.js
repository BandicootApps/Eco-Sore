// Capture.js

// Check if the product responses are stored in local storage
if (localStorage.getItem('productResponses')) {
  // Retrieve the product responses from local storage
  const storedResponses = localStorage.getItem('productResponses');

  // Parse the JSON string back into an object
  const products = JSON.parse(storedResponses);

  // Now you can use the products array in your JavaScript code
  // For example, logging it to the console:
  console.log(products);

  // Implement your logic to use the data
  // For instance, you might want to loop through the products and do something with each one
  products.forEach(product => {
      // Example: Log the name and responses of each product
      console.log(`Product Name: ${product.name}`);
      console.log(`Quantity: ${product.responses.quantity}`);
      console.log(`Material: ${product.responses.material}`);
      // Add more code as needed to work with the data
  });

  // Add any additional functions or logic to process the data
  // ...

} else {
  console.log("No product responses found in local storage.");
  // Handle the case where no data is found
  // For example, you might want to redirect back to the form or display a message
}
