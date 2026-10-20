// Scrivi una funzione che riceve un array di stringhe e una stringa da cercare nell'array.
// La funzione restituisce un booleano (true/false) che indica se la stringa è stata trovata o meno.
// La funzione restituisce sempre false in caso di errori (es. array vuoto, dati non stringa, assenza di dati ecc..).
// Svolgetelo inizialmente usando un normale for e una variabile d'appoggio.
// Se volete sviluppate ulteriormente usando quanto visto oggi.



const parole = ["buongiorno", "buonasera", "ciao"]

const trova = parole.some(parola => parola == "ciao");
console.log(trova)




