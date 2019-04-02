const express = require("express")

const server = express()

server.get("/", (req, res) => {
  res.json("Welcome to the JWT authentication app")
})

module.exports = server
