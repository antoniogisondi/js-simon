PROBLEMA: Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

SOLUZIONE:
1- Creare l'array che conterrà i numeri random;
2- Creo una funzione che mi genera un numero random da 1 a 100;
3- Creo un ciclo for dove immetterò questa funzione per a avere 5 numeri random da 1 a 100;
4- Creo una funzione timer che mi farà apparire i numeri a schermo per 30 secondi;
5- Dopo 30 secondi i numeri scompaiono e appare un prompt dove l'utente dovrà scrivere i numeri che sono stati memorizzati;
    5.1 L'inserimento deve essere composto esclusivamente da numeri;
6- Prendiamo i numeri inseriti nel prompt;
7- Confrontiamo i numeri random apparsi con quelli inseriti dall'utente nel prompt; 
    7.1 SE i numeri apparsi sono uguali ai numeri che l'utente ha inserito, allora è tutto corretto;
    7.2 ALTRIMENTI non è corretto;