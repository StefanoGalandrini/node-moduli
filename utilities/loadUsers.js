const fs = require("fs");
const path = require("path");

function loadUsers() {
  // creiamo il path per il file users.json
  const usersPath = path.join(__dirname, "../db", "users.json");

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

module.exports = loadUsers