import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/componentes/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Prueba en el componente GifGrid', () => { 

    const Categoria = 'Dragon Ball';

    test('Debe de mostrar el loading inicialmente', () => { 

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(
            <GifGrid 
                Categoria={ Categoria }
            />
        );
        expect( screen.getByText( 'Cargando...' ) );
        expect( screen.getByText( Categoria ));

     });

     test('Debe de mostrar items cuando se cargan las imagenes de useFetchGif', () => { 

        const gifs = [{
            id: 'abcd',
            title: 'Batman',
            url: 'https://miimagen.com/jose.jpg'
        }];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });
        render(
            <GifGrid 
                Categoria={ Categoria }
            />
        );

        //screen.debug();
        expect( screen.getAllByRole('img').length ).toBe(1);


      });

 })