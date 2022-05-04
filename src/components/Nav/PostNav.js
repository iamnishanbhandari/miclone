import React from 'react'
import './PostNav.css'
// import {logo} from "../data/data.json"
// import {logo}  from '../../data/data.json'
import data from "../../data/data.json"
import {FaSistrix } from "react-icons/fa";
import { Link } from 'react-router-dom'
const PostNav = () => {
    return (
        <>
            <div className='post-Nav'>
                <div className='postNav-components'>
                    <div className='postNav-all'>
                        <div className='logo'> 
                        <Link to="/dsd">
                            <img id='logoImage' src={data.logo} alt="Not"></img>
                        </Link>
                        </div>
                        <Link to={'miphones'} className="navlinks" >Mi Phones</Link>
                        <Link to={'redmiphones'} className="navlinks">Redmi Phones</Link>
                        <Link to={'tv'} className="navlinks">TV</Link>
                        <Link to={'laptops'} className="navlinks">Laptops</Link>
                        <Link to={'lifestyle'} className="navlinks">Fitness & Lifestyle</Link>
                        <Link to={'home'} className="navlinks">Home</Link>
                        <Link to={'audio'} className="navlinks">Radio</Link>
                        <Link to={'accessories'} className="navlinks">Accessories</Link>
                        <div className='postNav-search'>
                            <input className='post-search' placeholder='Search Products'></input>
                            <FaSistrix />                   </div>
                            
                    </div>

                </div>
            </div>
        </>

    )
}

export default PostNav