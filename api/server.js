const express = require("express")
const helmet = require("helmet")
const cors = require("cors")
const bcrypt = require("bcryptjs")

const authRouter = require("../auth/auth-router")
const userRouter = require("../user/user-router")

const server = express()

server.use(helmet())
server.use(express.json())
server.use(cors())

server.use(authRouter)
server.use("/api/users", userRouter)

server.get("/", (req, res) => {
  res.json("Welcome to the JWT authentication app")
})

module.exports = server
