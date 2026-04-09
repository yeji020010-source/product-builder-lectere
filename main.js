document.addEventListener('DOMContentLoaded', () => {
    const themeBtn = document.getElementById('theme-btn');
    const recommendBtn = document.getElementById('recommend-btn');
    const resultsContainer = document.getElementById('recommendation-results');

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

    // 로또 번호 생성 함수 (1세트)
    function generateLottoSet() {
        const numbers = new Set();
        while (numbers.size < 6) {
            const num = Math.floor(Math.random() * 45) + 1;
            numbers.add(num);
        }
        return Array.from(numbers).sort((a, b) => a - b);
    }

    // 추천 결과 표시 함수
    function displayRecommendations() {
        resultsContainer.innerHTML = ''; // 기존 결과 초기화

        for (let i = 0; i < 5; i++) {
            const lottoSet = generateLottoSet();
            const setContainer = document.createElement('div');
            setContainer.className = 'recommendation-set';
            
            lottoSet.forEach(num => {
                const ball = document.createElement('div');
                ball.className = 'lotto-ball';
                ball.textContent = num;
                
                // 번호 클릭 시 선택/해제 기능
                ball.addEventListener('click', () => {
                    ball.classList.toggle('selected');
                });
                
                setContainer.appendChild(ball);
            });
            
            resultsContainer.appendChild(setContainer);
        }
    }

    // 버튼 클릭 이벤트
    recommendBtn.addEventListener('click', () => {
        displayRecommendations();
    });
});
