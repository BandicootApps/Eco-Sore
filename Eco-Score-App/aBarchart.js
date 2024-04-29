// aBarchart.js


// aBarchart.js

// Define the material scores for each type of material.
const materialScores = {
    '100% Synthetic (e.g. Polyester/ Microfibre)': 5,
    'Natural/ Synthetic Blend (e.g. Polyester/ Cotton)': 50,
    '100% Natural (e.g. Cotton)': 90,
    'Organic Certified (e.g. Cotton)': 100
};

// Function to generate the bar chart using Chart.js.
function generateBarChart(productData) {
    // Get the context of the canvas element where the chart will be drawn.
    const ctx = document.getElementById('barChart').getContext('2d');

    // Create a new bar chart.
    new Chart(ctx, {
        type: 'bar',
        data: {
            // Map product names to the labels of the chart.
            labels: productData.map(product => product.name),
            datasets: [{
                // Remove the label property to remove the "Product Score" label
                // label: 'Product Score',
                // Map product scores to the data points of the chart.
                data: productData.map(product => product.score),
                backgroundColor: productData.map(product => {
                    if (product.score === 5) {
                        return 'red'; // Border color for red background
                    } else if (product.score === 50) {
                        return 'rgb(255, 215, 0)'; // Border color for orange background
                    } else if (product.score === 90) {
                        return 'rgb(157, 223, 210)'; // Border color for light green background
                    } else if (product.score === 100) {
                        return 'rgb(45, 155, 150)';  // Border color for dark green background
                    } else {
                        return 'rgb(201, 203, 207)'; // Border color for gray background
                    }
                }),
                borderColor: productData.map(product => {
                    if (product.score === 5) {
                        return 'red'; // Border color for red background
                    } else if (product.score === 50) {
                        return 'rgb(255, 215, 0)'; // Border color for orange background
                    } else if (product.score === 90) {
                        return 'rgb(157, 223, 210)'; // Border color for light green background
                    } else if (product.score === 100) {
                        return 'rgb(45, 155, 150)';  // Border color for dark green background
                    } else {
                        return 'rgb(201, 203, 207)'; // Border color for gray background
                    }
                }),
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: 'black', // Set the scale text color to black
                        
                    }
                },
                x: {
                    ticks: {
                        color: 'black', // Set the scale text color to black
                        
                    }
                }
            },
            plugins: {
                title: {
                    display: false, // Title display is set to false
                    text: 'Product Scores',
                    color: 'black' // Set the title text color to black
                },
                legend: {
                    display: false, // Legend is removed
                    labels: {
                        color: 'black' // Set the legend text color to black
                    }
                }
            }
        }
        
    });
}

// Check if the product responses are stored in local storage.
if (localStorage.getItem('productResponses')) {
    // Retrieve and parse the product responses from local storage.
    const storedResponses = localStorage.getItem('productResponses');
    const products = JSON.parse(storedResponses);

    // Map each product to include a score based on its material.
    const ratedProducts = products.map(product => ({
        ...product,
        score: materialScores[product.responses.material] || 0 // Default to 0 if material is not in the list.
    }));

    // Generate the bar chart with the rated products data.
    generateBarChart(ratedProducts);
} else {
    console.log("No product responses found in local storage.");
    // Handle the case where no product responses are available in local storage.
}
