const express = require("express")
const router = express.Router()

const restrict = require("../util/tokenHelpers").restrict
const Users = require("./user-model.js")

router.get("/", restrict, (req, res) => {
  const { department } = req.userInfo // userInfo contains all the user info: username, department
  Users.fetchByDepartment(department)
    .then(users => {
      res.json(users)
    })
    .catch(err => {
      console.log(err)
      res.send({
        error: "There was an error fetching users from the database"
      })
    })
})

module.exports = router
