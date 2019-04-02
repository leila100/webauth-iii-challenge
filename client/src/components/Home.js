import React from "react"

const Home = props => {
  const user = localStorage.getItem("user")
  if (!user) props.history.push("/signup")
  return (
    <h1>Welcome to Webauth-iii-challenge</h1>
    //<UsersList />
  )
}

export default Home
