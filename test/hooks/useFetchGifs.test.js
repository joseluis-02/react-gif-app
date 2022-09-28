import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Pruebas en mi custom hook useFetchGifs', () => { 
    
    const categoria = 'Dragon ball';

    test('Debe de regresar el estado inicial', () => { 

        //Para renderizar un hook
        const { result } = renderHook(() => useFetchGifs( categoria ));
        const { images , isLoading } = result.current;

        expect( images.length ).toBe(0);
        expect( isLoading ).toBeTruthy();
        //console.log( images );
     });

     test('Debe de retornar un arreglo de imagenes y el isLoading en false', async() => { 

        const { result } = renderHook(() => useFetchGifs( categoria ));
        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0),
            {
                timeout: 3000
            }
        );

        const { images , isLoading } = result.current;

        expect( images.length ).toBeGreaterThan(0);
        expect( isLoading ).toBeFalsy();

      });

 })