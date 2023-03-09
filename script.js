/* 
chiedere all'utente il numero di chilometri che vuole percorrere 
l'età del passeggero

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, 
secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana 
(con massimo due decimali, per indicare centesimi sul prezzo). 
Questo richiederà un minimo di ricerca.

Chiedo all'utente numero km 
chiedo all'utente la sua età
prezzo al km 0.21
calcolare prezzo biglietto (numeroKM * prezzoKm)
sconto under 18 0.20
sconto over 65 0.40
se utente età under 18 prezzo biglietto 
    prezzoBiglietto * sconto Under18 
Altrimenti se utente età over65 prezzo biglietto prezzoBiglietto
    prezzoBiglietto * scontoOver65
*/

const nome = prompt('Come ti chiami?')
const meta = prompt('in quale stazione andrai?')
const numeroKm = parseInt(prompt ('Quanti chilometri vuoi percorrere?'))
const etaUtente = parseInt(prompt('Quanti anni hai?'))

if(isNaN (numeroKm) || isNaN(etaUtente)) {
    alert('devi inserire numeri');

}

/* console.log(numeroKm, etaUtente); */
const prezzoKm = 0.21
const scontoUnder18 = 0.20
const scontoOver65 = 0.40 
let prezzoBiglietto = numeroKm * prezzoKm

const nomecliente = document.getElementById('nome');
nomecliente.innerHTML += nome;
const station = document.getElementById('stazione');
station.innerHTML += meta;

let messaggio = `
<h1> Il costo del tuo biglietto è: </h1> 
`;
/* console.log (prezzoBiglietto) */



if(etaUtente <= 18){
    prezzoBiglietto = prezzoBiglietto - (prezzoBiglietto * scontoUnder18)
    messaggio += ` ${prezzoBiglietto}€ Hai ricevuto uno sconto del 20%`;

} else if (etaUtente >= 65){
    prezzoBiglietto = prezzoBiglietto - (prezzoBiglietto + scontoOver65)
    messaggio += ` ${prezzoBiglietto.toFixed(2)} € Hai ricevuto uno sconto del 40%`;
} else {
    messaggio += ` ${prezzoBiglietto.toFixed(2) } €` 
}


document.getElementById('biglietto').innerHTML += messaggio;