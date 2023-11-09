const fetch = require("node-fetch").default;

/**
 *
 * @param {Function} onSuccess
 */
function loadAjaxData(onSuccess) {
  const url = "https://fakestoreapi.com/users";

  /* fetch(url).then((response) => {
    response.json().then((data) => {
      onSuccess(data);
    });
  }); */

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      onSuccess(data);
    });
}

module.exports = loadAjaxData;
