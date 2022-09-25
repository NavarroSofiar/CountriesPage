import React from 'react'
import {  useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link , useHistory} from 'react-router-dom';
import { getAllCountries, createActivity} from '../../redux/actions';

const CreateActivity = () => {
   const dispatch = useDispatch()
   const countries = useSelector((state => state.countries))
   const history = useHistory();
   const [errors, setErrors] = useState({});
   const[input,setInput] = useState({
    name:"",
    difficulty: "",
    duration: "",
    season: "",
    countries: []
   })
   useEffect (() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  function validate(input) {
    let errors = {};
  
    if (isNaN(input.name) !== true || !input.name ) {
      // name es requerido y no acepta espacios en blancos.
      errors.name = "The name field is required";
    }   
    if (!input.duration) {
      // duration es requerido
      errors.duration = "Duration is required";
    }
  
    if (!input.difficulty) {
      errors.difficulty = "Choose one option";
    }
  
    if (!input.season) {
      errors.season = "Choose one option";
    }
  
    if (input.countries.length < 1) {
      errors.countryId = "Choose at least one from the list";
    }
  
    return errors;
  }

  function handleChange(e) {
    //cada vez que se ejecuta handlechange, al estado input,
    setInput({
        //ademas de lo que tiene, se le agrega el target.value
        ...input,
        [e.target.name]: e.target.value,
    });
    setErrors(
        validate({
            ...input,
            [e.target.name]: e.target.value,
        })
    );
    console.log(input)
}
const handleSelectSeason = (e) => {
    setInput({
      ...input,
      season: e.target.value
    });
    setErrors(
        validate({
            ...input,
            [e.target.name]: e.target.value,
        })
    );
  };
  const handleSelectCountries = (e) => {
    setInput({
      ...input,
      countries: [...input.countries, e.target.value]
    });
    setErrors(
        validate({
            ...input,
            [e.target.name]: e.target.value,
        })
    );
    console.log(input)
  };

  const handleDeleteCountries = (d) => {
    setInput({
      ...input,
      countries: input.countries.filter(ct => ct !== d)
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(input));
		const errorCompletarFormu = validate(input);
		if (Object.values(errorCompletarFormu).length !== 0 || !input.countries) {
			alert("Todos los campos deben ser requeridos");
		} else {
    dispatch(createActivity(input));
    console.log(input);
    alert("Tourist activity successfully created")
    setInput({
      name: "",
      difficulty: "",
      duration: "",
      season: "",
      countries: []
    });
    history.push("/home");
  
    
  }};

  return (
    <div>
      <Link to='/home'><button>Back to countries</button></Link>
      
      <h1>Create Activity</h1>
      <form  onSubmit={e =>handleOnSubmit(e)}>
      <div className='field'>
        <label>Name:</label>
        <input key="1"
          name="name"
          type="text"
          placeholder="Name"
          value={input.name}
          onChange={e => handleChange(e)}
          />
          {errors.name && <p className="error">{errors.name}</p>}
          </div>

    <div className='field'>
    <label>Difficulty</label>
    <select
        name="difficulty"
        value={input.difficulty}
        placeholder={"difficulty"}
        onChange={e => handleChange(e)}
    >   
        <option key="defaultValue" value={""} selected disabled>Difficulty</option>
        <option  key="value1" value={"1"}>1</option>
        <option  key="value2" value={"2"}>2</option>
        <option  key="value3" value={"3"}>3</option>
        <option  key="value4" value={"4"}>4</option>
        <option  key="value5" value={"5"}>5</option>
        </select>
        {errors.difficulty && <p className="error">{errors.difficulty}</p>}
      </div>

      <div className='field'>
      <label>Duration:</label>
      <input
        key="duration"
        type="number"
        value={input.duration}
        name="duration"
        //autoComplete="off"
        min="0"
        placeholder="Duration"
        onChange={e => handleChange(e)}  
      />
       {errors.duration && <p className="error">{errors.duration}</p>}
      </div> 

    <div className='field'>
    <label>Season</label>
    <select 
    name="season"
    value={input.season} 
    onChange={e =>handleSelectSeason(e)}
    >
          <option key="defaultValue" value={""} selected disabled>Season</option>
          <option key="value1" value="Spring"> Spring </option>
          <option key="value2" value="Summer"> Summer </option>
          <option key="value3" value="Autumn"> Autumn </option>
          <option key="value4" value="Winter"> Winter </option>
    </select>
    {errors.season && <p className="error">{errors.season}</p>}
    </div>

    <div className='field'>
      <label>Countries</label>
      <select onChange={(e) => handleSelectCountries(e)}>         
        <option key="defaultValue" value={""} selected disabled>Countries select</option>
						{countries.map(countries => (
							<option key={countries.id} value={countries.name}>{countries.name}</option>
						))}
	</select>
     <ul>
          <li>{input.countries.map(el => el + ", ")}</li>
        </ul>
        
     </div>
        <div className='submit'>
          <button type={"submit"}  disabled={
            errors.name ||
            errors.difficulty ||
            errors.duration ||
            errors.season ||
            errors.countries
              ? true
              : false
          }  >Create</button>
        </div>
        <div>
        {
          input.countries.map(d => 
            <div>
              <p>{d}</p>
              <button onClick={() => handleDeleteCountries(d)}>X</button>
            </div>
            )
        }
      </div>

      </form>
    </div>
  )
}

export default CreateActivity
