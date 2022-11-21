import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {getAllCountries, FilterByContinent, orderByName, orderByPopulation} from '../../redux/actions';


const NavBar = () => {
const dispatch = useDispatch();
const handleOnClickReset = (e) => {
    e.preventDefault();
    dispatch(getAllCountries());
}
  return (
    <div>
         <h1>Explore and travel</h1>
        <div>
                <button className='btnReloadEsp' onClick={handleOnClickReset}>Reset</button>
        </div>
        <br></br>
    </div>
  )
}

export default NavBar
