import React from 'react';
import { Link , NavLink } from 'react-router-dom';

function Header() {
  return (
    // <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    //   <a className="navbar-brand" href="#">Navbar</a>
    //   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    //     <span className="navbar-toggler-icon"></span>
    //   </button>
    //   <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    //     <div className="navbar-nav">
    //       <NavLink className="nav-link" exact to="/">Home </NavLink>
    //       <NavLink className="nav-link" to="/about">About</NavLink>
    //       <NavLink className="nav-link" to="/log">Log</NavLink>
    //       <NavLink className="nav-link" to="/mount">Mounting</NavLink>
    //       <NavLink className="nav-link" to="/time">Time</NavLink>
    //       <NavLink className="nav-link" to="/redux">Redux</NavLink>
    //       <NavLink className="nav-link" to="/crud">CRUD</NavLink>
    //     </div>
    //   </div>
    // </nav>
    <header style={headerStyle}>
      <h1>TodoList</h1>
      <NavLink style={linkStyle} to="/"> Home </NavLink> 
      | <NavLink style={linkStyle} to="/about"> About </NavLink> 
      | <NavLink style={linkStyle} to="/log"> Log </NavLink>
      | <NavLink style={linkStyle} to="/mount"> Mounting </NavLink> 
      | <NavLink style={linkStyle} to="/time"> Time </NavLink>
      | <NavLink style={linkStyle} to="/redux"> Redux </NavLink> 
      | <NavLink style={linkStyle} to="/crud"> CRUD</NavLink>
    </header>
  )
}

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
}

const linkStyle = {
  color: '#fff',
  textDecoration: 'none'
}

export default Header;