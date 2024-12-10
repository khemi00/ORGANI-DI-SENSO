const questions = [
    {
        "question": "Qual è la patologia più frequente dell’orecchio esterno?",
        "options": ["Otite esterna", "Carcinoma basocellulare", "Colesteatoma"],
        "correct": 0
    },
    {
        "question": "L'otite esterna:",
        "options": ["Deriva sempre da un raffreddore", "Può derivare da un raffreddore", "Non ha rapporti diretti con il raffreddore"],
        "correct": 1
    }
    // Aggiungi altre domande qui
];

// Mischia un array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Prendi 40 domande a caso
function getRandomQuestions(allQuestions, num) {
    if (allQuestions.length < num) {
        console.error("Non ci sono abbastanza domande!");
        num = allQuestions.length; // Usa tutte le domande disponibili se sono meno di 40
    }
    shuffleArray(allQuestions);
    return allQuestions.slice(0, num);
}

const selectedQuestions = getRandomQuestions(questions, 40);

function generaQuiz() {
    const form = document.getElementById('quiz-form');
    form.innerHTML = '';

    selectedQuestions.forEach((item, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');

        const questionText = document.createElement('p');
        questionText.textContent = `${index + 1}. ${item.question}`;
        questionDiv.appendChild(questionText);

        // Mischia le opzioni mantenendo il mapping originale
        const originalOptions = item.options.map((opt, i) => ({ text: opt, index: i }));
        shuffleArray(originalOptions);

        originalOptions.forEach((option) => {
            const label = document.createElement('label');
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = `q${index}`;
            input.value = option.index; // Mantiene l'indice originale
            label.appendChild(input);
            label.appendChild(document.createTextNode(option.text));
            questionDiv.appendChild(label);
            questionDiv.appendChild(document.createElement('br'));
        });

        form.appendChild(questionDiv);
    });

    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = 'Invia Risposte';
    button.classList.add('button');
    button.onclick = () => calcolaPunteggio();
    form.appendChild(button);
}

function calcolaPunteggio() {
    const form = document.getElementById('quiz-form');
    const resultDiv = document.getElementById('result');
    let score = 0;

    const answers = new FormData(form);
    resultDiv.innerHTML = '';

    selectedQuestions.forEach((item, index) => {
        const userAnswer = answers.get(`q${index}`);
        const questionResult = document.createElement('p');

        if (parseInt(userAnswer) === item.correct) {
            score++;
            questionResult.innerHTML = `<span class="correct">${index + 1}. Corretta</span>`;
        } else {
            questionResult.innerHTML = `
                <span class="wrong">${index + 1}. Sbagliata</span> - 
                La risposta corretta è: ${item.options[item.correct]}
            `;
        }
        resultDiv.appendChild(questionResult);
    });

    const finalScore = document.createElement('h2');
    finalScore.textContent = `Il tuo punteggio è: ${score} su ${selectedQuestions.length}`;
    resultDiv.insertBefore(finalScore, resultDiv.firstChild);
}

document.addEventListener('DOMContentLoaded', generaQuiz);
