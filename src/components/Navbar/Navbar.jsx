import React from 'react'
import "./Navbar.css"
import { useNavigate } from 'react-router-dom'

export const Navbar = () => {
    const navigate = useNavigate()
  return (
<>
<div className="navbar">
    <div className="link" onClick={()=>navigate("/")}>Home</div>
    <div className="link" onClick={()=>navigate("/names")}>Names</div>
    <div className="link" onClick={()=>navigate("/login")}>Login</div>
</div>
</>
    )
}
