let currentQuestionIndex = 0;
let questions = [];
const colorCorrect ='#128c7e';
const colorIncorrect ='#8c1212';
const container = document.querySelector('.container');

function showGameOptions() {
    document.getElementById('buttonStart').style.display = 'none';
    document.getElementById('title').style.display = 'block';
    document.getElementById('game-options').style.display = 'block';
    document.getElementById('question-container').innerHTML = '';
}

async function startTrivia(amount) {
    document.getElementById('game-options').style.display = 'none';

    try {
        const response = await axios.get(`https://opentdb.com/api.php?amount=${amount}`);
        const { results, response_code } = response.data;

        if (response_code === 0) {
            questions = results;
            currentQuestionIndex = 0;
            displayCurrentQuestion();
        } else {
            console.error('Failed to fetch trivia questions');
        }
    } catch (error) {
        console.error('Error fetching trivia questions:', error);
    }
}

function displayCurrentQuestion() {
    const container = document.getElementById('question-container');
    container.innerHTML = '';

    if (currentQuestionIndex < questions.length) {
        const questionObj = questions[currentQuestionIndex];
        const { question, correct_answer, incorrect_answers } = questionObj;
        const options = shuffle([correct_answer, ...incorrect_answers]);

        const questionElement = document.createElement('div');
        questionElement.className = 'question';
        questionElement.innerHTML = `
            <p class="questionStatement">${currentQuestionIndex + 1}. ${decodeString(question)}</p>
            <ul>
                ${options.map(option => `<li class="optionsList" onclick="checkAnswer('${decodeString(option)}', '${correct_answer}')">${decodeString(option)}</li>`).join('')}
            </ul>
            <button id="continueButton" style="display: none;" onclick="nextQuestion()">Continuar</button>
        `;
        container.appendChild(questionElement);
    } else {
        document.getElementById('title').style.display = 'none';
        const resetButton = document.createElement('button');
        resetButton.textContent = 'Volver al Menú';
        resetButton.onclick = showGameOptions;
        container.appendChild(resetButton);
    }
}

function checkAnswer(userAnswer, correctAnswer) {
    const options = document.querySelectorAll('.question li');
    options.forEach(option => {
        if (option.textContent === userAnswer) {
            if (userAnswer === correctAnswer) {
                option.style.backgroundColor = colorCorrect;
                Swal.fire({
                    title: 'Correcto',
                    icon: 'success',
                    confirmButtonText: 'Continuar'
                });
            } else {
                option.style.backgroundColor = colorIncorrect;
                markCorrectAnswer(correctAnswer);
                Swal.fire({
                    title: 'Incorrecto',
                    icon: 'error',
                    text: `La respuesta correcta es: ${decodeString(correctAnswer)}`,
                    confirmButtonText: 'Continuar'
                });
            }
            option.style.borderRadius = '10px';
            option.style.color = '#FFFFFF';
            option.style.border = 'none'; 
            option.style.outline = 'none'; 
            document.getElementById('continueButton').style.display = 'block';
        }
    });
    disableAnswerOptions();
}

function markCorrectAnswer(correctAnswer) {
    const options = document.querySelectorAll('.question li');
    options.forEach(option => {
        if (option.textContent === decodeString(correctAnswer)) {
            option.style.backgroundColor  = colorCorrect;
            option.style.borderRadius = '10px';
            option.style.color = '#FFFFFF';
            option.style.border = 'none'; 
            option.style.outline = 'none';
        }
    });
}

function nextQuestion() {
    currentQuestionIndex++;
    displayCurrentQuestion();
    enableAnswerOptions();
}

function isAnswerSelected() {
    const options = document.querySelectorAll('.question li');
    for (const option of options) {
        if (option.style.backgroundColor === colorCorrect || option.style.backgroundColor === colorIncorrect) {
            return true;
        }
    }
    return false;
}

function disableAnswerOptions() {
    const options = document.querySelectorAll('.question li');
    options.forEach(option => {
        option.onclick = null;
    });
}

function enableAnswerOptions() {
    const options = document.querySelectorAll('.question li');
    options.forEach(option => {
        option.onclick = () => checkAnswer(option.textContent, questions[currentQuestionIndex].correct_answer);
    });
}

function decodeString(encodedString) {
    const element = document.createElement('div');
    element.innerHTML = encodedString;
    return element.textContent;
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
