import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className="dev1">
<h1>Mebel</h1>
<Link to={"/mehmonxona"}>
<p>Mehmonxona mebel</p>
</Link>
<Link to={"/oshxona"}>
<p>Oshxona mebel</p>
</Link>
<p>Kontakt</p>
</div>
  )
}

export default Navbar