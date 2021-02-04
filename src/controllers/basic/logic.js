const path = require("path");

function sendIndex(req, res) {
  res.sendFile(path.join(`${__dirname}../../../views/login.html`));
}

module.exports = { sendIndex };
