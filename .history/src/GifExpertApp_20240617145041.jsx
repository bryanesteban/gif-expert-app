import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


export const GifExpertApp = () => {
  



    const [ categories , setCategories ] = useState([ 'Mushoku tensei' ]);

    const onAddCategory = ( newCategory ) => {
        
        if(categories.includes(newCategory) ) return ;
        setCategories([newCategory, ...categories]);

        // setCategories(cat => [...cat,'Fullmetal Alchemist']);
    }

    return (
    <>

    <h1>GifExpertApp</h1>

    <AddCategory 
        // setCategories={ setCategories }
        onNewCategory={ event => onAddCategory(event)}
    />


    <>
        { categories.map( ( category ) => (
                <GifGrid 
                    key={ category } 
                    category={category}/>
                
            )) 
        }

    </>
    
    </>
  )
};
