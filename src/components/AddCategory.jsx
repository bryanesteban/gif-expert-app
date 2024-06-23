import { useState } from "react";
import PropTypes from 'prop-types';

export  const AddCategory = ( { onNewCategory } ) =>{
   

   const [inputValue, setInputValue] = useState('One Punch');

    const onInputChange= ({target}) => {
        setInputValue(target.value);
    }

    const onsubmit =( event ) => {
        event.preventDefault();

        if(inputValue.trim().length <= 1 ) return;
        
        // setCategories(categories => [inputValue, ...categories] );
        onNewCategory( inputValue.trim() );
        setInputValue('');
    }
   
    return (
        <form onSubmit={(event) => onsubmit(event)} aria-label="form">

        <input
            type="text"
            placeholder="Buscar Gifs"
            value={ inputValue }
            onChange={ (event) =>  onInputChange(event) }
            />
        </form>
        
    )
}

AddCategory.PropTypes = {
    onNewCategory: PropTypes.func.isRequired,
}