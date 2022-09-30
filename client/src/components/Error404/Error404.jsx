import React from 'react'
import {Link} from 'react-router-dom'

const Error404 = () => {
  return (
    <div className='fondoE'>
      <h1>PAGE NOT FOUND</h1>
      <h3>error 404</h3>
      <Link to='/home'><button className='btnReload'>Back to countries</button></Link>
      
       </div>
  )
}

export default Error404
