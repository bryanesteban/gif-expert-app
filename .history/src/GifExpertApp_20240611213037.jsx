import { useState } from "react";


export const GifExpertApp = () => {
  



    const [ categories , setCategories ] = useState([ 'One Punch', 'Dragon Ball']);

    console.log(categories);

    return (
    <>
    {/*Titulo */}
    <h1>GifExpertApp</h1>
    {/*Input */}
    {/*Listado de gif */}
    <ol>
        { categories.map( category => {
                return <li key={category}>Hola </li>
        }) }
        <li>ABC</li>

    </ol>
    {/* gif Item */}
    
    </>
  )
};
