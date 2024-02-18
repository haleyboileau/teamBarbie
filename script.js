const waterForm = document.getElementById('waterForm');
const waterInput = document.getElementById('waterInput');
const goalForm = document.getElementById('goalForm'); // Add reference to goal form
const waterGoalInput = document.getElementById('waterGoal'); // Add reference to water goal input
const waterGlass = document.getElementById('waterGlass');
const waterLevel = document.getElementById('waterLevel');
const goalDisplay = document.getElementById('goalDisplay'); // Add reference to goal display element

let goal = 80; // Default goal value
let sessionWater = 0; // Initialize water intake for the current session
goalDisplay.textContent = `Your water goal: ${goal} oz`; // Update goal display

// Function to update water level in the glass
function updateWaterLevel(amount) {
    const maxLevel = 400; // Maximum height of water level in pixels (corresponding to glass height)
    const percentage = (amount / goal) * 100; // Convert amount to percentage
    const height = (percentage / 200) * maxLevel; // Calculate height of water level in pixels

    waterLevel.style.height = height + 'px'; // Set height of water level div
}

function resetWaterLevel() {
    sessionWater = 0;
    updateWaterLevel(sessionWater);

    // Calculate milliseconds until next 4:17 PM PST
    const now = new Date();
    const resetTimePST = new Date(now);
    resetTimePST.setUTCHours(23, 23, 0, 0); // Set to 4:17 PM PST (UTC-8)
    if (now >= resetTimePST) {
        resetTimePST.setDate(resetTimePST.getDate() + 1); // If it's already past 4:17 PM PST, set to next day
    }
    const timeUntilReset = resetTimePST - now;

    // Schedule next reset at 4:17 PM PST
    setTimeout(resetWaterLevel, timeUntilReset);
}

// Call resetWaterLevel to start the reset loop
resetWaterLevel();

// Event listener for water intake form submission
waterForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const amount = parseFloat(waterInput.value); // Get water intake amount from input field

    if (!isNaN(amount) && amount > 0) {
        sessionWater += amount; // Update water intake for the current session
        updateWaterLevel(sessionWater); // Call function to update water level
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
