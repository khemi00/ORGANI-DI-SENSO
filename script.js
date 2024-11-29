// Funzione per calcolare il punteggio
function calcolaPunteggio() {
    const form = document.getElementById('quiz-form'); // Seleziona il modulo
    const resultDiv = document.getElementById('result'); // Seleziona la sezione dei risultati
    let score = 0; // Variabile per il punteggio

    // Leggi le risposte selezionate
    const answers = new FormData(form); 
    for (let value of answers.values()) {
        score += parseInt(value); // Somma i valori delle risposte
    }

    // Mostra il punteggio all'utente
    resultDiv.textContent = `Il tuo punteggio è: ${score}`;
}
