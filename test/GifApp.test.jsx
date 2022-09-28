import { render, screen } from "@testing-library/react";
import { GifApp } from "../src/GifApp";

describe('Prueba en mi componente principal GifApp', () => {
    test('Debe de hacer match con el snapshop', () => { 

        const { container } = render(
            <GifApp 

            />
        );

        //console.log( container );
        expect( container ).toMatchSnapshot();
        //screen.debug();
     });
});