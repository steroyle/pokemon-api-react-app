import React from 'react'
import './Header.css'

function Header() {
  return (
    <header>
      <h1 className="title"><a href="/">Pokemon API React App</a></h1>
      <p className="github"><a href="https://github.com/steroyle/pokemon-api-react-app">View on GitHub</a></p>
    </header>
  )
}

export default Header