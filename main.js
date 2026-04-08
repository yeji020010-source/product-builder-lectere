const checkBtn = document.getElementById('check-btn');
const userNumberInputs = document.querySelectorAll('.user-number');
const winningNumbersDisplay = document.querySelector('.winning-numbers-display');
const resultMessage = document.getElementById('result-message');

checkBtn.addEventListener('click', () => {
    // Get user numbers
    const userNumbers = Array.from(userNumberInputs).map(input => parseInt(input.value));

    // Validate user input
    if (userNumbers.some(isNaN) || new Set(userNumbers).size !== 6) {
        resultMessage.textContent = 'Please enter 6 unique numbers.';
        return;
    }

    // Generate winning numbers
    const winningNumbers = new Set();
    while (winningNumbers.size < 6) {
        const randomNum = Math.floor(Math.random() * 45) + 1;
        winningNumbers.add(randomNum);
    }
    const winningNumbersArray = Array.from(winningNumbers);

    // Display winning numbers
    winningNumbersDisplay.innerHTML = '';
    winningNumbersArray.forEach(num => {
        const numberElement = document.createElement('div');
        numberElement.classList.add('winning-number');
        numberElement.textContent = num;
        winningNumbersDisplay.appendChild(numberElement);
    });

    // Compare numbers and highlight matches
    let matches = 0;
    userNumberInputs.forEach((input, index) => {
        const userNum = userNumbers[index];
        input.classList.remove('match');
        if (winningNumbers.has(userNum)) {
            matches++;
            input.classList.add('match');
        }
    });

    // Display result message
    let message;
    switch (matches) {
        case 6:
            message = 'Congratulations! You won the jackpot!';
            break;
        case 5:
            message = 'Great job! You matched 5 numbers.';
            break;
        case 4:
            message = 'Good try! You matched 4 numbers.';
            break;
        case 3:
            message = 'You matched 3 numbers.';
            break;
        default:
            message = 'Sorry, you didn\'t win this time. Better luck next time!';
    }
    resultMessage.textContent = `You matched ${matches} numbers. ${message}`;
});
