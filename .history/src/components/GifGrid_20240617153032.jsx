import { useState, useEffect } from 'react';
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';



export const GifGrid = ( { category } ) => {
   
    const { images , isLoading} = useFetchGifs( category );
    // const [images, setImages] = useState([]);

    // const getImages = async() => {
    //     const newImages  = await getGifs( true );
    //     setImages(newImages);
    //     setisLoading(false);
    // }

    // useEffect( () => {
    //     // getGifs(category)
    //     // .then( newImages => setImages(newImages) );
    //     getImages();

    // },[])


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