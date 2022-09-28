import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/componentes/GifItem";

describe('Prueba de mi componente GifItem', () => {

    const title = 'One Punch';
    const url = 'https://midominio.com/imagen.jpg';

    test('Debe de hacer un snapshot del componente', () => { 

        const { container } = render(
            <GifItem 
                title={ title }
                url={ url }
            />
        );
        //console.log( container );

        expect(container ).toMatchSnapshot();

     });

     test('Debe mostrar la imagen con el url, alt correcto', () => { 

        render(
            <GifItem 
                title={ title }
                url= { url }
            />
        );

        const { src, alt} = screen.getByRole('img');
        //screen.debug();
        //console.log( src );

        expect( src ).toBe( url );
        expect( alt ).toBe( title );

      });

      test('Debe de mostrar el título en el componente en un párrafo', () => { 

        render(
            <GifItem 
                title={ title }
                url= { url }
            />
        );

        expect( screen.getAllByText( title ) ).toBeTruthy();

       });

});