document.addEventListener('DOMContentLoaded', () => {
    const checkBtn = document.getElementById('check-btn');
    const themeBtn = document.getElementById('theme-btn');
    const userNumberInputs = document.querySelectorAll('.user-number');
    const winningNumbersDisplay = document.querySelector('.winning-numbers-display');
    const resultMessage = document.getElementById('result-message');

    if (!checkBtn || !themeBtn) {
        console.error('Buttons not found!');
        return;
    }

    // 테마 전환 로직
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeBtn.textContent = '라이트 모드로 전환';
    }

    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        let theme = 'light';
        if (document.body.classList.contains('dark-mode')) {
            theme = 'dark';
            themeBtn.textContent = '라이트 모드로 전환';
        } else {
            themeBtn.textContent = '다크 모드로 전환';
        }
        localStorage.setItem('theme', theme);
    });

    checkBtn.addEventListener('click', () => {
        // 사용자 번호 가져오기
        const userNumbers = Array.from(userNumberInputs).map(input => parseInt(input.value));

        // 사용자 입력 유효성 검사
        if (userNumbers.some(isNaN) || new Set(userNumbers).size !== 6) {
            resultMessage.textContent = '중복되지 않는 6개의 숫자를 입력해주세요.';
            return;
        }

        // 당첨 번호 생성
        const winningNumbers = new Set();
        while (winningNumbers.size < 6) {
            const randomNum = Math.floor(Math.random() * 45) + 1;
            winningNumbers.add(randomNum);
        }
        const winningNumbersArray = Array.from(winningNumbers);

        // 당첨 번호 표시
        winningNumbersDisplay.innerHTML = '';
        winningNumbersArray.forEach(num => {
            const numberElement = document.createElement('div');
            numberElement.classList.add('winning-number');
            numberElement.textContent = num;
            winningNumbersDisplay.appendChild(numberElement);
        });

        // 번호 비교 및 일치 항목 강조
        let matches = 0;
        userNumberInputs.forEach((input, index) => {
            const userNum = userNumbers[index];
            input.classList.remove('match');
            if (winningNumbers.has(userNum)) {
                matches++;
                input.classList.add('match');
            }
        });

        // 결과 메시지 표시
        let message;
        switch (matches) {
            case 6:
                message = '축하합니다! 1등에 당첨되었습니다!';
                break;
            case 5:
                message = '대단해요! 5개의 숫자를 맞췄습니다.';
                break;
            case 4:
                message = '축하합니다! 4개의 숫자를 맞췄습니다.';
                break;
            case 3:
                message = '3개의 숫자를 맞췄습니다.';
                break;
            default:
                message = '아쉽지만 이번에는 당첨되지 않았습니다. 다음에 다시 시도해보세요!';
        }
        resultMessage.textContent = `${matches}개의 숫자를 맞췄습니다. ${message}`;
    });
});
