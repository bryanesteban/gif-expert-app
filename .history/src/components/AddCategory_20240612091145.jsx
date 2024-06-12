import { useState } from "react";


export  const AddCategory = (categories, setCategories ) =>{
   

   const [inputValue, setInputValue] = useState('One Punch');

    const onInputChange= ({target}) => {
        setInputValue(target.value);
    }

    const onsubmit =( event ) => {
        event.preventDefault();
        setCategories(...inputValue,event.target.value);
        console.log(categories);
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