import { string } from "prop-types";
import { getGifs } from "../../src/helpers/getGifs";

describe('Prueba en mi funcion getGifs', () => {
    
    test('Debe de retornar un array de objetos', async() => { 
    
        const gifs = await getGifs('Dragon Ball');
        //console.log( gifs );
        expect( gifs.length ).toBeGreaterThan( 0 );
        expect( gifs[0] ).toEqual({
            id: expect.any( String ),
            title: expect.any( String ),
            url: expect.any( String ),
        })
     })

});