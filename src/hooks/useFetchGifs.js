import { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs';
// cuando se exporta de esta manera en donde lo ocupemos lo tenemos que importar con { }
// export const useFetchGifs = ( category ) => {
const useFetchGifs = ( category ) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true );

    const getImages = async()=>{
        const newImages = await getGifs( category );
        setImages(newImages);
        setIsLoading( false )
    }
    useEffect(() => {
        getImages();
    }, []);

  return {
      images,
      isLoading
  }
}
// cuando se exporta de esta manera en donde lo ocupemos lo tenemos que importar sin { }
export default useFetchGifs
