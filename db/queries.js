const pool = require("./pool");

async function insertUser(
  first_name,
  last_name,
  username,
  password,
  membership
) {
  await pool.query(
    "INSERT INTO users (first_name, last_name, username, password, membership) VALUES ($1, $2, $3, $4, $5)",
    [first_name, last_name, username, password, membership]
  );
}

async function getMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  console.log(rows);
  return rows;
}

async function addMessage(title, message, username) {
  await pool.query(
    "INSERT INTO messages (message, username, title) VALUES ($1, $2, $3)",
    [message, username, title]
  );
}

module.exports = {
  insertUser,
  getMessages,
  addMessage,
};
