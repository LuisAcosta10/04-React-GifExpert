
import { GifItem } from "./GifItem";
import useFetchGifs from "../hooks/useFetchGifs";
// import { getGifs } from "../helpers/getGifs"

export const GitGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category );

    return (
        <>
            <h3>{ category }</h3>
            {/* forma 1 de porner el isLoading */}
            {
                //! forma 1 si se tiene 2 opciones una para true y otra para false
                // isLoading
                // ? (<h2>Cargando...</h2>)
                // : null
                // ! forma 2 para cuando solo se tiene una salida para true (&& and logico)
                isLoading && (<h2>Cargando...</h2>)
                
            }

            <div className="card-grid">
                {
                    images.map((image) =>(
                        <GifItem
                            key={image.id}
                            { ... image}
                        />
                    ))
                }
            </div>
        </>
    )
}




































// ! Condigo de la clase

// import { useEffect, useState } from "react"
// import { GifItem } from "./GifItem";
// import useFetchGifs from "../hooks/useFetchGifs";
// // import { getGifs } from "../helpers/getGifs"


// const GitGrid = ({ category }) => {

//     const { images, isLoading } = useFetchGifs( category );

//     return (
//         <>
//             <h3>{ category }</h3>
//             <div className="card-grid">
//                 {
//                     //? forma 1
//                     // images.map(( image ) =>(
//                     //         <li key={ image.id }>{image.title}</li>
//                     //     )
//                     // )
//                     //? forma 2 desestructuracion
//                     // images.map(( {id, title}) =>(
//                     //     <li key={ id }>{title}</li>
//                     // )
//                     //? forma con componente aparte GifItem
//                     // images.map((image) =>(
//                     //     <GifItem 
//                     //         key={image.id} 
//                     //         title={image.title}
//                     //         url={image.url}
//                     //     />
//                     // )
//                     // )
//                     //? forma 2 con componente aparte GifItem sirve para que el compoente resiba cada propiedad del objeto
//                     images.map((image) =>(
//                         <GifItem 
//                             key={image.id} 
//                             { ... image}
//                         />
//                     )
//                     )
//                 }
//                 {/* <li>abc</li> */}
//             </div>
//             {/* <h5>{ counter }</h5> */}

//             {/* <button onClick={() => setCounter( counter + 1 )}> +1 </button> */}
            
//             {/* <p>Hola Mundo</p> */}
//         </>
//     )
// }

// export default GitGrid
