import { useState } from "react";
import PropTypes from 'prop-types';

export  const AddCategory = ( setCategories  ) =>{
   

   const [inputValue, setInputValue] = useState('One Punch');

    const onInputChange= ({target}) => {
        setInputValue(target.value);
    }

    const onsubmit =( event ) => {
        event.preventDefault();

        if(inputValue.trim().length <= 1 ) return;
        
        setCategories(categories => { [inputValue, ...categories]} );
        setInputValue('');
    }
   
    return (
        <form onSubmit={(event) => onsubmit(event)}>

        <input
            type="text"
            placeholder="Buscar Gifs"
            value={ inputValue }
            onChange={ (event) =>  onInputChange(event) }
            />
        </form>
        
    )
}

AddCategory.prototype = {
    setCategories: PropTypes.any.isRequired,
};