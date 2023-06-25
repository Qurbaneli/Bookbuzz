import React from 'react'

function Header() {
  return (
    <header>
        <div className="searchbar">
            <input type="text" placeholder="Search for books by title,author or keyword"/>
        </div>

        <div className="right-navbar">
            <nav>
              <ul>
                <li><a href="#">Cart</a></li>
                <li><a href="#">Login</a></li>
              </ul>
            </nav>

            <div className="user">
                <img src="" alt="" />
            </div>
        </div>
    </header>
  )
}

export default Header