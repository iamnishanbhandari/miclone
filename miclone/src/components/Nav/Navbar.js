import React from 'react'
import './Navbar.css'
// const Dropdown = () =>{
//     <link rel="stylesheet" 
//     href="https://fonts.sandbox.google.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
// }
const Navbar = () => {
    return (
        <>
            <div className='Nav-bar'>
                <div className='Navbar-components'>
                    <div className='Navbar-RightComponents'>
                        <ul> 
                            <li className='Navbar-RightItem'> <a href='#'>XIAOMI INDIA</a></li>
                            <li className='Navbar-RightItem'> <a href='#'>GET MI STORE</a></li>
                            <li className='Navbar-RightItem'> <a href='#'>ONLINE HELP</a></li>
                            <li className='Navbar-RightItem'>
                                 <a href='#'>RETAIL STORE </a>
                            </li>
                        </ul>
                    </div>
                    <div className='Navbar-LeftComponents'>
                        <ul>
                            <li className='Navbar-LeftItem'><a href='#'> Sign In</a></li>
                            <li className='Navbar-LeftItem'><a href='#'>Sign Up </a></li>
                            <li className='Navbar-LeftItem'> <a href='#'>Shopping Cart</a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Navbar