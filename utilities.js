const { log } = require("console");
const fs = require("fs");
const path = require("path");

const nomeUtente = "Mario rossi";

/**
 * Funzione che data una lista di numeri, ne calcola la media
 * @param  {...number} numbers
 * @returns {number}
 */
function calcAvg(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0) / numbers.length;
}

/**
 * Data una stringa, ne conta le vocali
 * @param {string} stringa
 * @returns {number}
 */
function conteggioVocali(stringa) {
  const vocali = "aeiouAEIOU";
  let conteggio = 0;

  for (let i = 0; i < stringa.length; i++) {
    const carattere = stringa[i];

    if (vocali.includes(carattere)) {
      conteggio++;
    }
  }

  return conteggio;
}

function loadUsers() {
  // creiamo il path per il file users.json
  const usersPath = path.join(__dirname, "db", "users.json");

  // loggo il contenuto del file users.json
  /* const users = fs.readFile(usersPath, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }

    const users = JSON.parse(data.toString());
  }); */

  try {
    /**
     * @type {string}
     */
    const users = fs.readFileSync(usersPath, "utf-8");

    // Converto la stringa in un array di oggetti
    return JSON.parse(users);
  } catch (err) {
    console.log(err.message);

    return [];
  }
}

class Movie {}

// module.exports.Movie = Movie;
// module.exports.nomeUtente = nomeUtente;

module.exports = {
  Movie,
  nomeUtente,
  calcAvg,
  conteggioVocali,
  loadUsers
};
