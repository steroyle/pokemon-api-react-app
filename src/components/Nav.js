import React from 'react'
import './Nav.css'

function Nav({prev, next}) {
  return (
    <div className="nav-container">
      <button onClick={prev}>Previous</button>
      <button onClick={next}>Next</button>
    </div>
  )
}

export default Nav