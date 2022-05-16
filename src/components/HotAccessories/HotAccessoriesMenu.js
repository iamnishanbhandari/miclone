import React from 'react'
import { Link } from 'react-router-dom';
import './HotAccessories.css'

const HotAccessoriesMenu = () => {
  return (
<>
<div className='HotAccessoriesMenu'>
<Link className='HotAccessoriesLink' to={`/music`} >Music </Link>
<Link className='HotAccessoriesLink' to='/smartDevice' >SmartDevice</Link>
<Link className='HotAccessoriesLink' to='/home' >Home</Link>
<Link className='HotAccessoriesLink' to='/lifeStyle' >LifeStyle</Link>
<Link className='HotAccessoriesLink' to='/mobileAccessories'>MobileAccessories</Link>
<Link className='HotAccessoriesLink' to='/hotAccessoriesCover'>HotAccessoriesCover</Link>
</div>


</>
    )
}

export default HotAccessoriesMenu