// aOverall.js


// aOverall.js

// Define the material ratings for each type of material.
const materialRating = {
  '100% Synthetic (e.g. Polyester/ Microfirbre)': 0,
    'Natural/ Synthetic Blend (e.g. Polyester/ Cotton)': 50,
    '100% Natural (e.g. Cotton)': 90,
    'Organic Certified (e.g. Cotton)': 100
};

// Check if the product responses are stored in local storage
if (localStorage.getItem('productResponses')) {
  // Retrieve the product responses from local storage
  const storedResponses = localStorage.getItem('productResponses');

  // Parse the JSON string back into an object
  const products = JSON.parse(storedResponses);

  // Initialize variables
  let totalScore = 0;
  let totalQuantity = 0;

  // Loop through the products and calculate scores
  products.forEach(product => {
    if (product.responses.material !== undefined) {
      const rating = materialRating[product.responses.material] || 0;
      const score = rating;
      totalScore += score;
      totalQuantity += 1; // Increment the quantity for each product

      // Log information for each product
      console.log(`Material: ${product.responses.material}`);
      console.log(`Rating: ${rating}`);
      console.log(`Score: ${score}`);
    } else {
      console.log(`Undefined material for product ID: ${product.id}`);
      // Handle the case where the material is undefined, e.g., skip the product
    }
  });

  // Debugging: Log totalScore and totalQuantity
  console.log(`Total Score: ${totalScore}`);
  console.log(`Total Quantity: ${totalQuantity}`);

  // Calculate the average sustainability score as a percentage out of 100
  const averageSustainabilityScore = totalQuantity > 0 ? (totalScore / totalQuantity) : 0;

  // Debugging: Log the calculated average score
  console.log(`Average Sustainability Score: ${averageSustainabilityScore}`);

  // Display the average score in an HTML container
  const averageScoreElement = document.getElementById('average-score');
  averageScoreElement.textContent = `${Math.round(averageSustainabilityScore)}%`;

  // Add any additional functions or logic to process the data
  // ...

} else {
  console.log("No product responses found in local storage.");
  // Handle the case where no data is found
  // For example, you might want to redirect back to the form or display a message
}
