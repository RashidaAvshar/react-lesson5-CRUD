import React from 'react';
import { Link } from "react-router-dom"

function Header() {
  return (
    <header>
        <div className='container'>
            <nav>
                <ul className='header'>
                    <li>
                        <Link to="/">Home</Link>
                        <Link to="/table">Table</Link>
                        <Link to="/about">About</Link>
                        <Link to="/detail"></Link>
                        <Link to="/modal"></Link>
                    </li>
                </ul>
            </nav>
      
      </div>
    </header>
  )
}

export default Header;
