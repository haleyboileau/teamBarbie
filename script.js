const waterForm = document.getElementById('waterForm');
const waterInput = document.getElementById('waterInput');
const goalForm = document.getElementById('goalForm'); 
const waterGoalInput = document.getElementById('waterGoal');
const waterGlass = document.getElementById('waterGlass');
const waterLevel = document.getElementById('waterLevel');
const resetDay = document.getElementById('reset');
const goalDisplay = document.getElementById('goalDisplay');

let goal = 0; 
let waterAdded = 0;
goalDisplay.textContent = `Current water intake goal: 0 oz`; 

// Reset button
resetDay.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default button behavior

    waterAdded = 0; // Reset the water intake for the day
    updateWaterLevel(0);
});

// Update water level
function updateWaterLevel(amount) {
    const maxLevel = 400;
    const percentage = (amount / goal) * 100; // Convert amount to percentage
    const height = (percentage / 200) * maxLevel; // Calculate height of water level in pixels

    waterLevel.style.height = height + 'px'; // Set height of water level
}

// Water intake input
waterForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const amount = parseFloat(waterInput.value); // Get water intake amount from input field

    if (!isNaN(amount) && amount > 0) {
        waterAdded += amount; // Update water intake for the current session
        updateWaterLevel(waterAdded); //Update water level
        waterInput.value = ''; // Clear input field after submission
    } else {
        alert('Please enter a valid amount.'); // Display error message if input is invalid
    }

});

// Water goal input 
goalForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const newGoal = parseFloat(waterGoalInput.value); // Get new water goal value

    if (!isNaN(newGoal) && newGoal > 0) {
        goal = newGoal; // Update goal value
        goalDisplay.textContent = `Current water intake goal: ${goal} oz`; // Update goal display
        waterGoalInput.value = ''; // Clear input field after submission
        updateWaterLevel(waterAdded); // Update water level with new goal
    } else {
        alert('Please enter a valid goal.'); // Display error message if input is invalid
    }
});