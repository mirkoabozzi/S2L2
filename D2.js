/* ESERCIZIO 1 ok
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

const numeri = [10, 20];
console.log(Math.max(...numeri));

/* ESERCIZIO 2 ok
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

const number3 = 3;
if (number3 !== 5) {
  console.log("not equal");
}

// if (number3 < 5) {
//   console.log("not equal");
// }
// if (number3 > 5) {
//   console.log("not equal");
// }

/* ESERCIZIO 3 ok
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

const numero1 = 10;
if (numero1 % 5 === 0) {
  console.log("Divisibile per 5");
} else {
  console.log("Non è divisibile per 5");
}

/* ESERCIZIO 4 ok
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

const numero8 = 8;
const numero16 = 16;
console.log(numero8);
const risultato = numero16 - numero8;
console.log("Risultato sottrazione", risultato);

/* ESERCIZIO 5 ok
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart = 50;
let shippingCost = 10;
let totalAmount = totalShoppingCart;
if (totalShoppingCart >= 50) {
  console.log("Totale", totalShoppingCart, "Spedizione gratuita");
} else if (totalShoppingCart < 50) {
  console.log("Totale", totalShoppingCart + shippingCost, "Spese di spedizione aggiute");
}
// if (totalShoppingCart < 50) {
//   totalAmount = shippingCost + totalShoppingCart;
// }
// console.log("Totale da pagare", totalAmount);

/* ESERCIZIO 6 ok
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

let isBlackFriday = true;
if (isBlackFriday === true) {
  console.log("Applico il 20% di sconto", totalShoppingCart * 0.8);
} else if (isBlackFriday === false) {
  if (totalShoppingCart >= 50) {
    console.log("Totale", totalShoppingCart, "Spedizione gratuita");
  } else if (totalShoppingCart < 50) {
    console.log("Totale", totalShoppingCart + shippingCost, "Spese di spedizione aggiute");
  }
}

/* ESERCIZIO 7 ok
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

const x = 10;
const y = 30;
const z = 20;

if (x >= y) {
  if (z >= x) {
    console.log(z, x, y);
  } else {
    if (z >= y) {
      console.log(x, z, y);
    } else {
      console.log(x, y, z);
    }
  }
} else {
  if (z >= y) {
    console.log(z, y, x);
  } else {
    if (z >= x) {
      console.log(y, z, x);
    } else {
      console.log(y, x, z);
    }
  }
}

/* ESERCIZIO 8 ok
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

let valore = "casa";
console.log("Verifica valore", typeof valore);

/* ESERCIZIO 9 ok
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

const num = 10;

if (num % 2 === 0) {
  console.log("è un numero pari");
} else {
  console.log("è un numero dispari");
}

/* ESERCIZIO 10 ok
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
*/
let val = 7;
if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11 ok
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

me.city = "Toronto";
console.log("Lista proprioetà", me);

/* ESERCIZIO 12 ok
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName;
console.log("Lista proprioetà", me);

/* ESERCIZIO 13 ok
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

me.skills.pop();
console.log("Lista array", me.skills);

/* ESERCIZIO 14 ok
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

const arrayVuoto = [];
console.log("Array vuoto", arrayVuoto);
arrayVuoto.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log("Array pieno", arrayVuoto);

/* ESERCIZIO 15 ok
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

arrayVuoto.pop();
arrayVuoto.push(100);
console.log("Cambio ultimo numero", arrayVuoto);
