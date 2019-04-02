const express = require("express")
const router = express.Router()
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const Users = require("../user/user-model")

const secret = process.env.JWT_SECRET || "This is a secret"

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username,
    department: user.department
  }
  const options = {
    expiresIn: "1d"
  }
  return jwt.sign(payload, secret, options)
}

router.post("/api/register", (req, res) => {
  const user = req.body

  if (!user.username || !user.password || !user.department) {
    res.status(400).json({
      errorMessage: "Please provide a username, password, and department."
    })
  } else {
    //generate hash from user's password
    const hash = bcrypt.hashSync(user.password, 10) //2 ^ n times

    //override use.password with hash
    user.password = hash

    //Create token with user info
    const token = generateToken(user)

    // Add user to database and send back response, with token info
    Users.add(user)
      .then(userId => {
        res.status(201).json({ userId: userId, token: token })
      })
      .catch(error => {
        console.log(error)
        res.status(500).json({
          error: "There was an error saving the new user to the database"
        })
      })
  }
})

router.post("/api/login", (req, res) => {
  let { username, password } = req.body

  if (!username || !password) {
    res.status(400).json({
      errorMessage: "Please provide a username, and password."
    })
  } else {
    Users.find({ username }) // Check username exist in database
      .first()
      .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
          // Check that password is same as in database
          const token = generateToken(user) // Create token because user is valid
          res.status(200).json({ message: `Welcome ${user.username}!`, token }) // Send token to client
        } else {
          res.status(400).json({ message: "Invalid Credentials" })
        }
      })
      .catch(error => {
        res.status(500).json(error)
      })
  }
})

module.exports = router
