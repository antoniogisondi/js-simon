// CREO LA FUNZIONE CHE MI GENERERA' I NUMERI RANDOM
function randonNumber(min, max){
    return Math.floor(Math.random()*(max - min + 1) + min);
}


// CICLO LA FUNZIONE PER GENERARE 5 NUMERI RANDOM
for( let i = 1; i <= 5; i++){
    let number = randonNumber(0,100)
    let box = document.querySelector('.number')
    box.innerHTML += ` ${number} `
    let message = document.querySelector('.message')
    setTimeout(function(){
        box.innerHTML = ''
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
    
        if(number == promptUser){
            box.innerHTML += ` ${number} `
            message.innerHTML += `Il tuo risultato: ${number} è corretto, `
        }
        else{
            box.innerHTML += ` ${number} `
            message.innerHTML += `Il tuo risultato: ${promptUser} non è corretto, `
        }

    },30020)
}


   
   
   
   
   
   
   
   