import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';



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

    },[])


    return (
        <>
            <h3> { category } </h3>
            <div className='card-grid'>
           {
                images.map(  ( image) => (
                   <GifGridItem key={ image.id } />

                ))
            } 
        </div>
           

            
        </>
    )
}