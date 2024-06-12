import { useState } from "react";


export  const AddCategory = (categories, setCategories ) =>{
   

   const [inputValue, setInputValue] = useState('One Punch');

    const onInputChange= ({target}) => {
        setInputValue(target.value);
    }

    const onsubmit =( event ) => {
        event.preventDefault();
         console.log(inputValue);
        setCategories(...categories,inputValue);
    }
   
    return (
        <form onSubmit={(event) => onsubmit(event)}>

        <input
            type="text"
            placeholder="Buscar Gifs"
            value={ inputValue}
            onChange={ (event) =>  onInputChange(event) }
            />
        </form>
        
    )
}