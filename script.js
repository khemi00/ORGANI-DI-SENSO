// Carica le domande dal file JSON
fetch('domande.json')
    .then(response => response.json())
    .then(data => {
        generaDomande(data);
    })
    .catch(error => console.error('Errore nel caricamento delle domande:', error));

// Genera le domande dinamicamente
function generaDomande(domande) {
    const quizForm = document.getElementById('quiz-form');
    domande.forEach((domanda, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');

        const questionText = document.createElement('p');
        questionText.textContent = `${index + 1}. ${domanda.domanda}`;
        questionDiv.appendChild(questionText);

        domanda.opzioni.forEach((opzione, opzioneIndex) => {
            const label = document.createElement('label');
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = `q${index}`;
            input.value = opzione.corretta ? 1 : 0;
            label.appendChild(input);
            label.append(` ${opzione.testo}`);
            questionDiv.appendChild(label);
            questionDiv.appendChild(document.createElement('br'));
        });

        quizForm.appendChild(questionDiv);
    });
}

// Calcola il punteggio
function calcolaPunteggio() {
    const form = document.getElementById('quiz-form');
    const resultDiv = document.getElementById('result');
    let score = 0;

    const answers = new FormData(form);
    for (let value of answers.values()) {
        score += parseInt(value);
    }

    resultDiv.textContent = `Il tuo punteggio è: ${score}`;
}
