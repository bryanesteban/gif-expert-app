import { useState, useEffect } from 'react';

export const useFetchGifs = () => {
    const [images, setImages] = useState([]);

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
    images: [],
    isLoading: false
  )
}