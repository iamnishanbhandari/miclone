import React from 'react'
import '../slider/line.css'

function Line({text})  {
  return (
<>
<div className='lineText'> 
<div></div>
<p> {text} </p>
<div></div>
</div>
</>
    )
}

export default Line