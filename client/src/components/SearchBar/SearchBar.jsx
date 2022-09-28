import React from 'react';
import { useState } from 'react';
import {useDispatch} from 'react-redux';
import { getNameCountries } from '../../redux/actions';
import './SearchBar.modules.css'


export default function SearchBar(){
    const dispatch = useDispatch();
    const[name,setName] = useState('')
    

    function handleInputChange(e){
        e.preventDefault();
        setName(e.target.value);
        console.log(name)
    }
    function handleSubmit(e){
        e.preventDefault();
       let a= dispatch(getNameCountries(name));
       console.log(a)
         setName("");
        
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