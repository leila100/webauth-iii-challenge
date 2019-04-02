const jwt = require("jsonwebtoken")

const secret = process.env.JWT_SECRET || "is it secret, is it safe?"

module.exports = function restricted(req, res, next) {
  const token = req.headers.authorization
  if (token) {
    // Check if the token is valid
    jwt.verify(token, secret, (err, decodedToken) => {
      if (err) {
        // The token has been modified or expired
        res.status(401).json({ message: "You shall not pass!" })
      } else {
        req.userInfo = decodedToken
        next()
      }
    })
  } else {
    res.status(401).json({ message: "You shall not pass!" })
  }
}
