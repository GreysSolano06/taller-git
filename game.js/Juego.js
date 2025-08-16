// game.js - Juego para adivinar un número (Node.js)
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const target = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

console.log(`📅 Fecha y hora de inicio: ${new Date().toLocaleString()}`);
console.log("========================================");
console.log("Bienvenido al reto de adivinar el número secreto!");
console.log("El número está entre 1 y 100. Escribe 'salir' para abandonar.");

function ask() {
  rl.question('Tu intento: ', (answer) => {
    if (answer.toLowerCase() === 'salir') {
      console.log(`Gracias por jugar. El número era ${target}.`);
      rl.close();
      return;
    }
    const guess = parseInt(answer, 10);
    if (isNaN(guess) || guess < 1 || guess > 100) {
      console.log('Entrada inválida. Ingresa un número entre 1 y 100.');
      ask();
      return;
    }
    attempts++;
    const diff = Math.abs(guess - target);
    if (guess === target) {
      console.log(`¡Felicidades! Adivinaste en ${attempts} intento(s).`);
      rl.close();
      return;
    }
    if (diff >= 30) console.log('🥶 Súper congelado');
    else if (diff >= 15) console.log('🧊 Frío como el hielo');
    else if (diff >= 6) console.log('🌞 Calentando motores');
    else console.log('🔥🔥 En llamas!');



    if (guess < target) console.log('Pista: el número es mayor.');
    else console.log('Pista: el número es menor.');
    ask();
  });
}

ask();
