const express = require("express")
const router = express.Router()

const restricted = require("../util/restricted")
const Users = require("./user-model.js")

router.get("/", restricted, (req, res) => {
  const { department } = req.userInfo
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
