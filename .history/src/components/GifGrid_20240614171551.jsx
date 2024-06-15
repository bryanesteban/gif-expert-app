import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';



export const GifGrid = ( { category } ) => {
   
    const [images, setImages] = useState([]);

    const getImages = async() => {
        const newImages  = await getGifs( category );
        setImages(newImages);
    }

    useEffect( () => {
        // getGifs(category)
        // .then( newImages => setImages(newImages) );
        getImages();

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