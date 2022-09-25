import React from 'react'
import { Link } from 'react-router-dom'


const Card = ({ flag, name, continent, id }) => {
  return (
    <div>
      <Link to={`/countries/${id}`}>
     <h3>{name}</h3>
     <h5>{continent}</h5>
     <h6>{id}</h6>
     <img src={flag} alt="img not found"  width="200px" heigth="250px"/> 
     </Link>
    </div>
  )
}

export default Card
 