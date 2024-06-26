import { useState } from 'react';
import { getGifs } from '../helpers/getGifs';



export const GifGrid = ( { category } ) => {
   
    const [counter, setCounter] = useState(10);
    

    getGifs(category);
    return (
       <>
            <h3> { category } </h3>
            <h5> { counter }</h5>
            <button onClick={ () => setCounter()}> +1 </button>
       </>
    )
}