const db = require("../database/dbConfig.js")

module.exports = {
  add
}

async function add(user) {
  const [id] = await db("users").insert(user)
  return id
}
