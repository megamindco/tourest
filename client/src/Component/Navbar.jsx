import React, { useState } from 'react'

const Navbar = () => {

  const[isActive, setIsActive] = useState(false)

  return (
    <div>
      <header className={`header ${isActive ? "active" : ""}`} data-header>
        <div className="container">

          <a href="#">
            <h1 className="logo">Tourest</h1>
          </a>


          <button className= {`nav-toggle-btn ${isActive ? "active" : ""}`} data-nav-toggle-btn 
          aria-label="Toggle Menu"
          onClick={()=> setIsActive(!isActive)}>
            <ion-icon name="menu-outline" className="open"></ion-icon>
            <ion-icon name="close-outline" className="close"></ion-icon>
          </button>

          <nav className= "navbar">

            <ul className="navbar-list">

              <li>
                <a href="#" className="navbar-link">Home</a>
              </li>

              <li>
                <a href="#" className="navbar-link">About Us</a>
              </li>

              <li>
                <a href="#" className="navbar-link">Tours</a>
              </li>

              <li>
                <a href="#" className="navbar-link">Destinations</a>
              </li>

              <li>
                <a href="#" className="navbar-link">Blog</a>
              </li>

              <li>
                <a href="#" className="navbar-link">Contact Us</a>
              </li>

            </ul>

            <a href="#" className="btn btn-secondary">Booking Now</a>

          </nav>

        </div>
      </header>
    </div>
  )
}

export default Navbar
