import { join } from "path";

function sendIndex(req, res) {
  res.sendFile(join(`${__dirname}../../../views/login.html`));
}

export default { sendIndex };
