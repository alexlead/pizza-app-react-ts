import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'

const Search = () => {

    const [searchValue, setSearchValue] = useState<string>("");
    const [searchInputClasses, setSearchFocused] = useState<string>("");

    const fieldClassName = () => {
        
        searchInputClasses === "searchfocused" && searchValue === "" ? setSearchFocused("") : setSearchFocused("searchfocused");
        console.log(searchInputClasses);
    
    }

  return (
    <div className='searchForm'>
        
        <input 
        type="text" 
        name="search" 
        className={ searchInputClasses } 
        onChange={(e)=>setSearchValue(e.target.value)} 
        value={searchValue}
        />
        <FontAwesomeIcon icon={faMagnifyingGlass}  onClick={fieldClassName} />
    </div>
  )
}

export default Search