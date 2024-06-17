import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';



export const GifGrid = ( { category } ) => {
   
    const [images, setImages] = useState([]);
    const [isLoading, setisLoading] = useState([]);

    const getImages = async() => {
        const newImages  = await getGifs( true );
        setImages(newImages);
        setisLoading(false);
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
                   <GifGridItem 
                        key={ image.id } 
                        {  ...image }
                    />

                ))
            } 
        </div>
           

            
        </>
    )
}