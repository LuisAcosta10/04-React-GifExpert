import { renderHook, waitFor } from "@testing-library/react";
import useFetchGifs from "../../src/hooks/useFetchGifs"

// se evalua el hook en el comportamiento del return

describe('Pruebas en el hook useFetchGifs', () => { 

    test('debe de regresar el estado inicial', () => {

        const { result } = renderHook( () => useFetchGifs('One Puch'))
        // console.log(result)
        const { images, isLoading} = result.current

        expect( images.length).toBe(0)
        expect( isLoading).toBeTruthy()
        // useFetchGifs();

    }) 

    test('debe de retornar un arreglo de imaganes y el isLoading en False', async() => {

        const { result } = renderHook( () => useFetchGifs('One Puch'))
        await waitFor(
            () => expect( result.current.images.length).toBeGreaterThan(0)
        )
        // console.log(result)
        // const { images, isLoading} = result.current

        // expect( images.length).toBe(0)
        // expect( isLoading).toBeTruthy()
        // useFetchGifs();

    }) 

})