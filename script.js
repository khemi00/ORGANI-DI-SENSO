const questions = [
    {
        "question": "Qual è la patologia più frequente dell’orecchio esterno?",
        "options": ["Otite esterna", "Carcinoma basocellulare", "Colesteatoma"],
        "correct": 0
    },
    {
        "question": "L'otite ESTERNA:",
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
    let score = 0;

    const answers = new FormData(form);

    selectedQuestions.forEach((item, index) => {
        const questionDiv = document.querySelectorAll('.question')[index]; // Seleziona il div della domanda
        const userAnswer = answers.get(`q${index}`);

        // Rimuovi eventuali feedback precedenti
        const existingFeedback = questionDiv.querySelector('.feedback');
        if (existingFeedback) {
            existingFeedback.remove();
        }

        // Crea un elemento per il feedback
        const feedback = document.createElement('span');
        feedback.classList.add('feedback');
        feedback.style.marginLeft = '10px';

        // Verifica la risposta e aggiungi il feedback
        if (parseInt(userAnswer) === item.correct) {
            score++;
            feedback.className = 'feedback correct';
            feedback.textContent = '✓ Risposta corretta';
        } else {
            feedback.className = 'feedback wrong';
            feedback.textContent = `✗ Sbagliata. Corretto: ${item.options[item.correct]}`;
        }

        // Aggiungi il feedback accanto alla domanda
        questionDiv.appendChild(feedback);
    });

    // Mostra il punteggio totale in alto
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<h2>Il tuo punteggio è: ${score} su ${selectedQuestions.length}</h2>`;
}

document.addEventListener('DOMContentLoaded', generaQuiz);
