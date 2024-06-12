import { useState } from "react";


export  const AddCategory = ( setCategories ) =>{
   

   const [inputValue, setInputValue] = useState('One Punch');

    const onInputChange= ({target}) => {
        setInputValue(target.value);
    }

    const onsubmit =( event ) => {
        event.preventDefualt();
         console.log(event);
        setCategories(...inputValue,inputValue);
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