import React from "react";
import './TodoSearch.css';

function TodoSearch({searchValue,setSearchValue}) {

    const onSearchValueChange = (event)=>{
        setSearchValue(event.target.value);
    }

    return (
        <div className="TodoSearch">
            <input 
                className="TodoSearch" 
                placeholder="Cebolla"
                value={searchValue}
                onChange={onSearchValueChange}
            />
        </div>
    );
}

export { TodoSearch };