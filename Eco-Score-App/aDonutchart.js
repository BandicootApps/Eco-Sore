// aDonutchart.js



// aDonutchart.js

// Function to generate the doughnut chart
function generateDoughnutChart(chartData) {
    const ctx = document.getElementById('donutChart').getContext('2d');
    new Chart(ctx, {
        type: 'doughnut',
        data: chartData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: {
                        color: 'black', // Set the legend text color to black
                        
                    }
                }
            }
        }
    });
}

// Check if the product responses are stored in local storage
if (localStorage.getItem('productResponses')) {
    // Retrieve the product responses from local storage
    const storedResponses = localStorage.getItem('productResponses');

    // Parse the JSON string back into an object
    const products = JSON.parse(storedResponses);

    // Count the number of products per material, excluding undefined materials
    const materialCount = products.reduce((acc, product) => {
        const material = product.responses.material;
        if (material) { // Check if the material is defined
            acc[material] = (acc[material] || 0) + 1;
        }
        return acc;
    }, {});

    // Prepare data for the doughnut chart with custom colors and specific order
    const doughnutData = {
        labels: [
            'Organic Certified (e.g. Cotton)',
            '100% Natural (e.g. Cotton)',
            'Natural/ Synthetic Blend (e.g. Polyester/ Cotton)',
            '100% Synthetic (e.g. Polyester/ Microfibre)'
        ],
        datasets: [{
            label: 'Number of Products by Material',
            data: [
                materialCount['Organic Certified (e.g. Cotton)'] || 0,
                materialCount['100% Natural (e.g. Cotton)'] || 0,
                materialCount['Natural/ Synthetic Blend (e.g. Polyester/ Cotton)'] || 0,
                materialCount['100% Synthetic (e.g. Polyester/ Microfibre)'] || 0
            ],
            backgroundColor: [
                'rgb(45, 155, 150)',   // Dark green (fully opaque)
                'rgb(157, 223, 210)',  // Light green (fully opaque)
                'rgb(255, 215, 0)',
                'rgb(255, 0, 0)'       // Red (fully opaque)
            ],
            borderColor: [
                'rgb(45, 155, 150)',   // Dark green (fully opaque)
                'rgb(157, 223, 210)',  // Light green (fully opaque)
                'rgb(255, 215, 0)',
                'rgb(255, 0, 0)'       // Red (fully opaque)
            ],
            borderWidth: 1
        }]
    };

    // Generate the doughnut chart with the counted data and custom colors
    generateDoughnutChart(doughnutData);
}
