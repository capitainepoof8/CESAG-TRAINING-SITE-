// --- DOM Elements ---
const gameContainer = document.getElementById('game-container');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const nextBtn = document.getElementById('next-btn');
const scoreText = document.getElementById('score-text');
const progressText = document.getElementById('progress-text');
const progressBar = document.getElementById('progress-bar');
const endScreen = document.getElementById('end-screen');
const finalScore = document.getElementById('final-score');
const restartBtn = document.getElementById('restart-btn');
const questionArea = document.getElementById('question-area');

// --- Game State ---
let currentQuestionIndex = 0;
let score = 0;
let answered = false;
let shuffledQuestions = [];

// --- Sound Effects ---
const correctSound = new Tone.Synth({
    oscillator: { type: 'triangle' },
    envelope: { attack: 0.005, decay: 0.1, sustain: 0.3, release: 1 }
}).toDestination();

const incorrectSound = new Tone.Synth({
    oscillator: { type: 'sawtooth' },
    envelope: { attack: 0.005, decay: 0.1, sustain: 0.3, release: 1 }
}).toDestination();

// --- Utility Functions ---
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// --- Game Functions ---
function startGame() {
    // Shuffle questions using Fisher-Yates algorithm for better randomization
    shuffledQuestions = shuffleArray(questions);
    currentQuestionIndex = 0;
    score = 0;
    answered = false;
    endScreen.classList.add('hidden');
    questionArea.classList.remove('hidden');
    optionsContainer.classList.remove('hidden');
    nextBtn.classList.add('hidden');
    updateScore();
    loadQuestion();
}

function loadQuestion() {
    answered = false;
    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    optionsContainer.innerHTML = '';

    // Shuffle the options while keeping track of the correct answer
    const shuffledOptions = shuffleArray(currentQuestion.options.map((option, index) => ({
        text: option,
        originalIndex: index
    })));
    
    // Find the new index of the correct answer after shuffling
    const newCorrectIndex = shuffledOptions.findIndex(option => 
        option.originalIndex === currentQuestion.answer
    );
    
    // Update the correct answer index for this shuffled question
    shuffledQuestions[currentQuestionIndex].shuffledAnswer = newCorrectIndex;

    shuffledOptions.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option.text;
        button.classList.add('option-card', 'w-full', 'p-4', 'border', 'border-gray-300', 'rounded-lg', 'text-left', 'bg-white', 'hover:bg-gray-50');
        button.dataset.index = index;
        button.addEventListener('click', selectAnswer);
        optionsContainer.appendChild(button);
    });

    updateProgress();
    nextBtn.classList.add('hidden');
}

function selectAnswer(e) {
    if (answered) return;
    answered = true;
    
    // Start audio context on user interaction
    Tone.start();

    const selectedOption = e.target;
    const selectedAnswerIndex = parseInt(selectedOption.dataset.index);
    const correctAnswerIndex = shuffledQuestions[currentQuestionIndex].shuffledAnswer;

    const options = optionsContainer.children;

    if (selectedAnswerIndex === correctAnswerIndex) {
        score++;
        selectedOption.classList.add('correct');
        correctSound.triggerAttackRelease('C5', '8n');
    } else {
        selectedOption.classList.add('incorrect');
        options[correctAnswerIndex].classList.add('correct');
        incorrectSound.triggerAttackRelease('C3', '8n');
    }
    
    // Disable all options
    for (let option of options) {
        option.disabled = true;
    }

    updateScore();
    nextBtn.classList.remove('hidden');
}

function updateScore() {
    scoreText.textContent = `Score: ${score}`;
}

function updateProgress() {
    progressText.textContent = `Question ${currentQuestionIndex + 1} / ${shuffledQuestions.length}`;
    const progressPercentage = ((currentQuestionIndex + 1) / shuffledQuestions.length) * 100;
    progressBar.style.width = `${progressPercentage}%`;
}

function handleNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledQuestions.length) {
        loadQuestion();
    } else {
        showEndScreen();
    }
}

function showEndScreen() {
    questionArea.classList.add('hidden');
    optionsContainer.classList.add('hidden');
    nextBtn.classList.add('hidden');
    endScreen.classList.remove('hidden');
    finalScore.textContent = `${score} / ${shuffledQuestions.length}`;
}

// --- Event Listeners ---
nextBtn.addEventListener('click', handleNextQuestion);
restartBtn.addEventListener('click', startGame);

// --- Initialize Game ---
startGame();
