import { useState } from "react";
import { AddCategory } from "./components/AddCategory";


export const GifExpertApp = () => {
  



    const [ categories , setCategories ] = useState([ 'One Punch', 'Dragon Ball']);

    // const onAddCategory = () => {
    //     setCategories([...categories,'Fullmetal Alchemist']);
    //     // setCategories(cat => [...cat,'Fullmetal Alchemist']);
    // }

    return (
    <>
    {/*Titulo */}
    <h1>GifExpertApp</h1>
    {/*Input */}
    <AddCategory 
        setCategories={ setCategories}
    />


    {/*Listado de gif */}
    <ol>
        { categories.map( category => {
                return <li key={category}>{category} </li>
        }) }

    </ol>
    {/* gif Item */}
    
    </>
  )
};
