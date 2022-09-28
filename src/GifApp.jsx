import { useState } from 'react';
import { AgregarCategoria,GifGrid } from './componentes';

export const GifApp = () => {

    const [ categorias, setCategorias ] = useState(['One punch']);
    //console.log( categorias );
    const addCategoria = ( nuevoValor ) => {
        //console.log( nuevoValor );
        //setCategorias( c => [...c], 'Nuevo Valor');
        //prmera solucion
        //setCategorias([...categorias,'categorias']);
        //Segundo forma
        // Validar repetidos
        if ( categorias.includes(  nuevoValor ) ) return;

        setCategorias(c => [nuevoValor, ...categorias]);
    }

  return (
    <>
        {/* Titulo de mi aplicacion */}
        <h1>Buscador de Gifs</h1>

        {/*Input de la aplicaión */}
        <AgregarCategoria 
            //Pasando una funcion a al componente hijo
            //setCategorias = { setCategorias }

            // el componente hijo retorna un valor nuevo
            onNewCategory = { valorRetorno => addCategoria(valorRetorno) }
        />

        {/*listado de Gifs o items */}
        { categorias.map( categoria => {
            return (
                <GifGrid
                    key={ categoria }
                    Categoria={ categoria }
                />
            )
            })
        }
        
    </>
  )
}
