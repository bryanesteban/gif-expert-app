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

    },[])


    return (
        <>
            <h3> { category } </h3>
           {
            images.map( (img )=> {
            <ol key={ img.id }>
                <li>img.id</li>
                <li>img.title</li>
                <li>img.url</li>

            </ol>
            })
           } 
           

            
        </>
    )
}