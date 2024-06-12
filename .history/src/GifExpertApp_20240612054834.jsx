import { useState } from "react";


export const GifExpertApp = () => {
  



    const [ categories , setCategories ] = useState([ 'One Punch', 'Dragon Ball']);

    const onAddCategory = () => {
        setCategories('Fullmetal Alchemist');
    }
    console.log(categories);

    return (
    <>
    {/*Titulo */}
    <h1>GifExpertApp</h1>
    {/*Input */}
    {/*Listado de gif */}
    <button onClick={onAddCategory}>Agregar</button>
    <ul>
        { categories.map( category => {
                return <li key={category}>{category} </li>
        }) }

    </ul>
    {/* gif Item */}
    
    </>
  )
};
