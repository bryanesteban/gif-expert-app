import { useState } from "react";


export  const AddCategory = () =>{
   

   const [inputValue, setInputValue] = useState('One Punch');

    const onInputChange= () => {
        setInputValue('Hola Mundo');
    }
   
    return (
        <input
            type="text"
            placeholder="Buscar Gifs"
            value={ inputValue}
            onChange={ (event) =>  onInputChange(event) }
        />
        
    )
}