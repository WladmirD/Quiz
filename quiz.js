const quizQuestions = [
  {
    question: "What is the result of '3' + 3?",
    options: ['6', "'33'", '33', 'Error'],
    correctAnswer: "'33'",
  },
  {
    question: 'What does `typeof null` return?',
    options: ["'null'", "'object'", "'undefined'", "'number'"],
    correctAnswer: "'object'",
  },
  {
    question: 'Which operator is used to assign a value to a variable?',
    options: ['*', '=', '-', '+'],
    correctAnswer: '=',
  },
  {
    question: 'What is the value of `undefined == null`?',
    options: ['true', 'false', 'Error', 'NaN'],
    correctAnswer: 'true',
  },
  {
    question: 'What is the purpose of the `break` statement?',
    options: [
      'Continue loop',
      'Stop loop',
      'Skip current iteration',
      'Return from a function',
    ],
    correctAnswer: 'Stop loop',
  },
];

let userAnswers = [];

function displayQuiz() {
  const quizContainer = document.getElementById('quiz-container');
  quizContainer.innerHTML = '';
  quizQuestions.forEach((question, index) => {
    const questionElement = document.createElement('div');
    questionElement.classList.add('question');

    questionElement.innerHTML = `
            <p>${index + 1}. ${question.question}</p>
            ${question.options
              .map(
                (option, i) => `
                <label>
                    <input type="radio" name="question${index}" value="${option}">
                    ${option}
                </label>
            `
              )
              .join('')}
        `;
    quizContainer.appendChild(questionElement);
  });
}

function calculateScore() {
  let score = 0;
  quizQuestions.forEach((question, index) => {
    const selectedAnswer = document.querySelector(
      `input[name="question${index}"]:checked`
    );
    if (selectedAnswer && selectedAnswer.value === question.correctAnswer) {
      score++;
    }
  });
  return score;
}

function showResults() {
  const score = calculateScore();
  const resultsContainer = document.getElementById('results');
  resultsContainer.innerHTML = `You scored ${score} out of ${quizQuestions.length}`;
}

document.getElementById('submit').addEventListener('click', showResults);

displayQuiz();
