import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {

    //const categories = ['One Punch', 'Samurai x', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch']);

    /*const handleAdd = () => {
        //setcategories([ ...categories, 'Magdiel Andrés']);
        setcategories( cats => [ ...cats, 'Magdiel Andrés']);
    }*/

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories = { setCategories } />

            <hr/>
            <ol>
                {
                    categories.map( category => (
                        //<li key = { category }> { category } </li>
                        <GifGrid 
                            key={category}
                            category={category}
                        />
                    ))

                }
            </ol>
        </>
    )
}


