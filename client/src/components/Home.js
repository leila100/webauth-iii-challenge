import React from "react"

const Home = props => {
  const token = localStorage.getItem("token")
  if (!token) props.history.push("/signup")
  return (
    <h1>Welcome to Webauth-iii-challenge</h1>
    //<UsersList />
  )
}

export default Home
