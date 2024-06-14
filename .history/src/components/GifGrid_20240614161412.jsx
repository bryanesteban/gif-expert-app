
export const GifGrid = ( { category } ) => {
   
    
    const getGifs = async() => {
        const url = `https://api.giphy.com/v1/gifs/search?api_key=Jdvq0NAKjj3sRa1rFGAlO9hs8AezoRlm&q=${ category }&limit=20`;

        const resp = await fetch( url );
        const { data } = await resp.json();
        console.log(data);

    }

    getGifs();
    return (
       <>
            <h3> { category } </h3>
          
       </>
    )
}