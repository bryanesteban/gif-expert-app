export const getGifs = async( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=MokFzHRig1V6hft1NBjtd3nYOntQN9FD&q=${ category }&limit=20`;

    const resp = await fetch( url );
    const { data } = await resp.json();


    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));


}