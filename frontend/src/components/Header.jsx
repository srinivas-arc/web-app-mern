import React from 'react'
import {Link } from "react-router-dom";


const Header = () => {
  return (
    <div>
        <h1>Welcome to MERN </h1>
        <Link to = {"/getAllItems"}>
            <button>Products</button>
        </Link>
        <Link to = {"/createProduct"}>
            <button>Create </button>
        </Link>
        
    </div>
  )
}

export default Header
