import { useState } from "react"
import { AddCategory, GitGrid } from './components'


export const GitExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = ( newCategory ) => {
        // const newCategory = 'Valorant'
        // setCategories([...categories, newCategory]) //Forma 1
        // console.log(newCategory)
        if(categories.includes(newCategory)) return
            //! es lo mismo que 
            // if(categories.includes(newCategory)) {
            //     return
            // }
        setCategories([newCategory, ...categories]) //Forma 1
        // setCategories(cat => [...cat, newCategory]) //Forma 2

    }
    return (
        <>
            {/* titulo */}
            <h1>GitExpertApp</h1>

            {/* Inputs */}
            <AddCategory
                // setCategories={setCategories}
                OnNewCategory={ (value) => onAddCategory(value)}
            />

            {/* Listado de Gif */}
            {/* <button onClick={onAddCategory}>enviar</button> */}
            <ol>
                {
                    //? forma 1
                    // categories.map((category) => {
                    //     return (
                    //         <div key={category}>
                    //             <h3>{ category }</h3>
                    //             <li>{ category }</li>
                    //         </div>
                    //     )
                    // })
                    //? forma 2
                    categories.map(( category ) =>(
                            <GitGrid key={ category } category={category}/>
                        )
                    )
                }
                {/* <li>abc</li> */}
            </ol>
            {/* Gif Item */}


        </>
    )
}