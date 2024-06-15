import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';



export const GifGrid = ( { category } ) => {
   
    const [counter, setCounter] = useState(10);
    
    useEffect( () => {
        getGifs(category);
    },[])


    return (
        <>
            <h3> { category } </h3>

            <ol>
                <li>Titulo</li>
                <li>Titulo</li>
                <li>Titulo</li>
                <li>Titulo</li>
            </ol>
        </>
    )
}