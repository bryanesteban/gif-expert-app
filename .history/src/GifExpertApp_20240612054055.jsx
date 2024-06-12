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
    <ul>
        { categories.map( category => {
                return <li key={category}>{category} </li>
        }) }
        <li>ABC</li>

    </ul>
    {/* gif Item */}
    
    </>
  )
};
