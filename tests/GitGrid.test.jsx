
import { render, screen } from "@testing-library/react"
import { GitGrid } from '../src/components/GitGrid'
import  useFetchGifs  from "../src/hooks/useFetchGifs"

//aqui le decimos que haga un mock completo del path "../src/hooks/useFetchGifs"
jest.mock("../src/hooks/useFetchGifs")
// useFetchGifs


describe('Pruebas en <GifGrid />', () => {

    const category = 'One Punch'

    test('debe de mostrar el loading inicialmente', () => {

            useFetchGifs.mockReturnValue({
                images: [],
                isLoading: true
            })

            render(<GitGrid category= { category }/> )
            // screen.debug()
            expect( screen.getByText('Cargando...'))
            expect( screen.getByText(category))

    })

    test('debe de mostrar items cuando se cargan las imaganes useFetchGi', () => {

        const gifs = [
            {
            
                id: 'ABC',
                title: 'Saitama',
                url: 'https://localhost/saitama.jpg'

            },
            {
            
                id: '123',
                title: 'Goku',
                url: 'https://localhost/goku.jpg'

            }
        ]
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: true
        })
        render(<GitGrid category= { category }/> )
        // screen.debug()
        expect( screen.getAllByRole('img').length).toBe(2)
        // expect( screen.getByText(category))
       

    })

})


