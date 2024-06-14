
export const GifGrid = ( { category } ) => {
   
    
    const getGifs = async() => {
        const url = `api.giphy.com/v1/gifs/search?api_key=wkNKjzDOTHN6xA0jBAK4SwQopZ9FDoZI&q= ${ category}&limit=20`;

        const resp = await fetch ( url);
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