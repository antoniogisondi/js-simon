// CREO LA FUNZIONE CHE MI GENERERA' I NUMERI RANDOM
function randonNumber(max, min){
    return Math.floor(Math.random()*(max - min + 1) + min);
}

// CREO L'ARRAY CHE MI CONTERRA' I NUMERI RANDOM
let number = []

// CICLO LA FUNZIONE PER GENERARE 5 NUMERI RANDOM
for( let i = 0; i < 5; i++){
    number.push(randonNumber(0,100))
    document.querySelector('.number').innerHTML = number
    let message = document.querySelector('.message')
    setTimeout(function(){
        document.querySelector('.number').innerHTML = ''
   },30000)

// ESEGUO IL PROMPT
   setTimeout(function(){
    let promptUser;
    do{
        promptUser = parseInt(prompt('Inserisci i numeri che ricordi'))
    }
    while(isNaN(promptUser)){
        console.log(promptUser)
    }

    if(number === promptUser){
        document.querySelector('.number').innerHTML = number
        message.innerHTML += `Il tuo risultato: ${number} è corretto`
    }
    else{
        document.querySelector('.number').innerHTML = number
        message.innerHTML += `Il tuo risultato: ${promptUser} non è corretto, la risposta giusta era ${number}`
    }
   },30020)
}
    








