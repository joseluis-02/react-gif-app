import { fireEvent, render, screen } from "@testing-library/react"
import { AgregarCategoria } from "../../src/componentes/AgregarCategoria";

describe('Prueba en mi componente AgregarCategoria', () => { 

    test('Debe de cambiar el valor de caja de texto cuando escriba', () => { 

        render(
            <AgregarCategoria 
                onNewCategory={ () => {} }
            />
        );

        //screen.debug();
        const input = screen.getByRole('textbox');
        fireEvent.input( input, { target: { value: 'nuevo valor'}} );
        expect( input.value ).toBe('nuevo valor' );

     });

     test('Debe de llamar al la funcion onNewCategory si el input tiene mas de 2 caracteres', () => { 

        const inputValue = 'nuevo valor';
        //TODO ???
        const onNewCategory = jest.fn();
        render(
            <AgregarCategoria 
                onNewCategory={ onNewCategory }
            />
        );

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.input( input, { target: { value: inputValue }} );
        //screen.debug();

        fireEvent.submit( form );
        expect( input.value ).toBe('');

        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue );
      });

      test('No debe de llamar a la funcion onNewCategory si el valor del input está vacio', () => { 

       
        const onNewCategory = jest.fn();
        render(
            <AgregarCategoria 
                onNewCategory={ onNewCategory }
            />
        );
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.submit( form );
        //screen.debug();
        expect( input.value ).toBe('');
       // expect( onNewCategory ).toHaveBeenCalledTimes(0);
        expect( onNewCategory ).not.toHaveBeenCalled();
        //expect( input.value ).toBe('');
        //expect( onNewCategory ).toHaveBeenCalledTimes(0);

       })


 })