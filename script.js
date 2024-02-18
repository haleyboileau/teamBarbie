const waterForm = document.getElementById('waterForm');
const waterInput = document.getElementById('waterInput');
const waterGlass = document.getElementById('waterGlass');
const waterLevel = document.getElementById('waterLevel');

// Event listener for form submission
waterForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const amount = parseFloat(waterInput.value); // Get water intake amount from input field
    if (!isNaN(amount) && amount > 0) {
        updateWaterLevel(amount); // Call function to update water level
        waterInput.value = ''; // Clear input field after submission
    } else {
        alert('Please enter a valid amount.'); // Display error message if input is invalid
    }

});

// Function to update water level in the glass
function updateWaterLevel(amount) {
    const maxLevel = 400; // Maximum height of water level in pixels (corresponding to glass height)
    const percentage = (amount / 2000) * 100; // Convert amount to percentage (assuming goal is 2000ml)
    const height = (percentage / 100) * maxLevel; // Calculate height of water level in pixels

    waterLevel.style.height = height + 'px'; // Set height of water level div
}