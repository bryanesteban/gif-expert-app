import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (  { category }  ) => {
    const [images, setImages] = useState(category);
    const [isLoading, setisLoading] = useState(true);

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
  
    return {
    images: images,
    isLoading: isLoading
    }
}
