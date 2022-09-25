import React from 'react'
import './Paged.modules.css';

const Paged = ({ countriesPerPage,currentPage, setCurrentPage, allCountries, totalPages }) => {
    const pageNumber = [];
    let round=0;
    if(allCountries%10 ===0){
       round=Math.ceil(allCountries/(countriesPerPage+1)) +1; //en el caso de que la cantidad de países sea múltiplo de 10 agrego una página
    } else {round=Math.ceil(allCountries/(countriesPerPage+1))}
    
    //Math.ceil redondea todos mis países, sobre los países que quiero por página
   for (let i = 1; i <= round; i++) {
        //Push a mi arreglo vacio para que tome el valor de esa itreción
        pageNumber.push(i)   
    }
    const prevClick = () => {
      setCurrentPage(currentPage - 1)
    }
  
    const nextClick = () => {
      setCurrentPage(currentPage + 1)
    }

  return (
    <nav>
      <ul className="pageNumbers">
      <button className='movesBtn' disabled={currentPage <= 1} onClick={prevClick} >Prev</button>
        {pageNumber && 
        pageNumber.map(number =>           
            <li className="number" key={number}>
              <a onClick={()=> totalPages(number)}>{number}</a>
            </li>
        )}
      <button className='movesBtn' disabled={currentPage >= round} onClick={nextClick} >Next</button>
      </ul>
    </nav>
  )
}

export default Paged;
