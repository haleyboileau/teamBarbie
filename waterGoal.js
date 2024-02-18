const waterGoalForm = document.getElementById('waterGoalForm');
const resultDiv = document.getElementById('result');
let suggestedGoal = 0;

waterGoalForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const weight = parseFloat(document.getElementById('weight').value);
    const activityLevel = document.getElementById('activityLevel').value;

    // Calculate suggested water intake goal based on user's input

    suggestedGoal = weight / 2; // Based on Penn Medicine (2015) https://www.pennmedicine.org/updates/blogs/health-and-wellness/2015/may/how-much-water-do-you-need-each-day
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