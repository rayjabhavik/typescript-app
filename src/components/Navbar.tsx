import React from 'react'
import {Link} from 'react-router-dom'
import '../css/master.css'; 

export default function Navbar() {
  return (
    <div className="sidenav">

    <p>---function----</p>
    <p><Link to ="/inputfield" className="text-decoration-none ">change value with input field</Link></p>
    <p><Link to ="/message" className="text-decoration-none ">on button click show message</Link></p>
    <p><Link to ="/quantity" className="text-decoration-none ">calculate quantity</Link></p>
    <p><Link to ="/temp" className="text-decoration-none ">calculate temperature</Link></p>
    <p><Link to ="/list" className="text-decoration-none ">calculate according dropdown</Link></p>
    <p><Link to ="/color" className="text-decoration-none ">color change task</Link></p>
    <p><Link to ="/clone" className="text-decoration-none ">clone using react</Link></p>
    <p><Link to ="/counter" className="text-decoration-none ">increment decrement value</Link></p>
    <p><Link to ="/nine" className="text-decoration-none ">increment decrement with add div</Link></p>

  
</div>

  )
}
