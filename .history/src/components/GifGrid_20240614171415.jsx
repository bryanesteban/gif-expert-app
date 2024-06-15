import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';



export const GifGrid = ( { category } ) => {
   
    const [images, setImages] = useState([]);

    useEffect( () => {
        getGifs(category)
        .then( newImages => setImages(newImages) );

    },[images])


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