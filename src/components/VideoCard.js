import React from 'react'
import './videocard.css'

const playButton = <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

const VideoCard = ({image,name,index}) => {
  return (
    <div className='videoCard' style={{backgroundImage:`url(${image})`}}> 
    <a href='#/'>{playButton}</a>
    <p>{name}</p>
    </div>
  )
}

export default VideoCard