import React from 'react';
import { useState } from 'react';
import {useDispatch} from 'react-redux';
import { getNameCountries } from '../../redux/actions';
import './SearchBar.modules.css'


export default function SearchBar(){
    const dispatch = useDispatch();
    const[name,setName] = useState('')
    const [,setOrden] = useState('')
    const [currentPage,setCurrentPage] = useState(1)
    
    

    function handleInputChange(e){
        e.preventDefault();
        setName(e.target.value);
        console.log(name)
        
    }
    function handleSubmit(e){
        e.preventDefault();
         dispatch(getNameCountries(name));
         setName("");
         setCurrentPage(1);
        setOrden(e.target.value);
         
    }


    return(
        <div>
            <input className='searchBar'
            type = 'text' 
            placeholder='Search Country...'
            onChange={(e) => handleInputChange(e)}
            />
            <button className='btnSubmit' type='submit' onClick={(e) =>handleSubmit(e)}>Search</button>

        </div>
    )
}