import React from 'react'

function Header() {
    return (
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">  
    
                <ul className="nav navbar-nav navbar-right">
                    <li><a href="#">Don't have an account?</a></li>
                    <button className="btn">Signup</button>
                </ul>
            </div>

        </nav>
    )
}

export default Header
