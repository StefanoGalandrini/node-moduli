const http = require("http");
const dotenv = require("dotenv");
const loadUsers = require("./utilities/loadUsers");
const loadAjaxData = require("./utilities/loadAjaxData");

// deve essere eseguito prima di accedere alle variabili d'ambiente
dotenv.config();

const port = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  const users = loadUsers();
  const html = []

  html.push("<ul>");

  // for (const user of users) {
  for(let i = 0; i < users.length; i++) {
    const user = users[i];
    html.push(`<li>${user.name}</li>`);
  }

  html.push("</ul>");

  /* const html = "<ul>";

  for (const user of users) {
    html += `<li>${user.name}</li>`;
  }

  html += "</ul>"; */

  res.setHeader("Content-Type", "text/html;charset=utf-8");



  res.end(html.join(""));
});

const serverAsync = http.createServer((req, res) => {
  loadAjaxData((users) => {
    const html = [];

    html.push("<ul>");

    for (const {name:{firstname, lastname}} of users) {
      html.push(`<li>${firstname + " " + lastname}</li>`);
    }

    html.push("</ul>");

    res.setHeader("Content-Type", "text/html;charset=utf-8");

    res.end(html.join(""));
  });
});

serverAsync.listen(port, () => {
  console.log(`Server running at port ${port}`);
});