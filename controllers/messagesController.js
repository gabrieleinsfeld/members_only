const db = require("../db/queries");
async function addMessage(req, res) {
  await db.addMessage(req.body.title, req.body.message, req.body.username);
  res.redirect("/");
}
module.exports = {
  addMessage,
};
