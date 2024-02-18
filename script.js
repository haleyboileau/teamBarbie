const waterForm = document.getElementById('waterForm');
const waterInput = document.getElementById('waterInput');
const goalForm = document.getElementById('goalForm'); 
const waterGoalInput = document.getElementById('waterGoal');
const waterGlass = document.getElementById('waterGlass');
const waterLevel = document.getElementById('waterLevel');
const goalDisplay = document.getElementById('goalDisplay');

let curr_date = new Date().toJSON().slice(0, 10);
console.log(curr_date); 

let goal = 80; // Default goal value
let sessionWater = 0; // Initialize water intake for the current session
goalDisplay.textContent = `Your water goal: ${goal} oz`; 

// Function to update water level
function updateWaterLevel(amount) {
    const maxLevel = 400;
    const percentage = (amount / goal) * 100; // Convert amount to percentage
    const height = (percentage / 200) * maxLevel; // Calculate height of water level in pixels

    waterLevel.style.height = height + 'px'; // Set height of water level
}

// Event listener for water intake form submission
waterForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const amount = parseFloat(waterInput.value); // Get water intake amount from input field

    if (!isNaN(amount) && amount > 0) {
        sessionWater += amount; // Update water intake for the current session
        updateWaterLevel(sessionWater); //Update water level
        waterInput.value = ''; // Clear input field after submission
    } else {
        alert('Please enter a valid amount.'); // Display error message if input is invalid
    }

});

// Event listener for water goal form submission
goalForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const newGoal = parseFloat(waterGoalInput.value); // Get new water goal value

    if (!isNaN(newGoal) && newGoal > 0) {
        goal = newGoal; // Update goal value
        goalDisplay.textContent = `Your water goal: ${goal} oz`; // Update goal display
        waterGoalInput.value = ''; // Clear input field after submission
        updateWaterLevel(sessionWater); // Update water level with new goal
    } else {
        alert('Please enter a valid goal.'); // Display error message if input is invalid
    }
});
