document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('numberForm');
    const resultDiv = document.getElementById('result');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the form from submitting and refreshing the page

        // Get values from input fields
        const minValue = parseInt(document.getElementById('minValue').value, 10);
        const maxValue = parseInt(document.getElementById('maxValue').value, 10);

        // Validate input values
        if (isNaN(minValue) || isNaN(maxValue) || minValue > maxValue) {
            resultDiv.textContent = 'Please enter valid minimum and maximum values (min ≤ max).';
            return;
        }

        // Generate random number
        const randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;

        // Display the result
        resultDiv.textContent = `Random number: ${randomNumber}`;
    });
});
