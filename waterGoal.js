const waterGoalForm = document.getElementById('waterGoalForm');
const resultDiv = document.getElementById('result');

waterGoalForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const age = parseInt(document.getElementById('age').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const activityLevel = document.getElementById('activityLevel').value;

    // Calculate suggested water intake goal based on user's input
    let suggestedGoal = 0;

    suggestedGoal = weight / 2;
    if (activityLevel === 'low'){
        suggestedGoal = suggestedGoal + 5;
    }
    else if (activityLevel === 'moderate'){
        suggestedGoal = suggestedGoal + 20;
    }
    else if (activityLevel === 'active'){
        suggestedGoal = suggestedGoal + 35;
    }

    // Display the suggested goal
    resultDiv.innerHTML = `<p>Your suggested water intake goal is ${suggestedGoal} oz per day.</p>`;
});