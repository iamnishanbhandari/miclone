import React from 'react'
import './PostNav.css'
// import {logo} from "../data/data.json"
import {logo}  from '../../data/data.json'
import { Link } from 'react-router-dom'
const PostNav = () => {
    return (
        <>
            <div className='post-Nav'>
                <div className='postNav-components'>

                    <div className='postNav-Logo'>
                        <Link to="/dsd">
                            <img id='logoImage' src={logo} alt="Not"></img>
                        </Link>
                    </div>

                </div>
            </div>
        </>

    )
}

export default PostNav