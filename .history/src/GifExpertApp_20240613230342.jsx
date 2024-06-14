import { useState } from "react";
import { AddCategory } from "./components/AddCategory";


export const GifExpertApp = () => {
  



    const [ categories , setCategories ] = useState([ 'One Punch', 'Dragon Ball']);

    const onAddCategory = ( newCategory ) => {
        
        if(categories.filter(newCategory) === true ) return ;
        setCategories([...categories,newCategory]);

        // setCategories(cat => [...cat,'Fullmetal Alchemist']);
    }

    return (
    <>
    {/*Titulo */}
    <h1>GifExpertApp</h1>
    {/*Input */}
    <AddCategory 
        // setCategories={ setCategories }
        onNewCategory={ event => onAddCategory(event)}
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
