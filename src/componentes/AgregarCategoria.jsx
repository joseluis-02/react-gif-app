import { useState } from 'react';
import PropTypes from 'prop-types'
export const AgregarCategoria = ( { onNewCategory } ) => {

    const [InputValue, setInputValue] = useState('');
    const onInputChange = ( { target } ) => {
       // console.log(target.value);
        setInputValue( target.value );
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        //console.log( InputValue );
        if ( InputValue.trim().length <= 1 ) return;

        //setCategorias(c => [ InputValue,...c ]);
        onNewCategory( InputValue.trim() );

        //Limpiar el input
        setInputValue('');
    }

  return (
    <form onSubmit={ onSubmit } aria-label='form'>
        <input 
            type="text"
            placeholder="Buscar Gifs"
            value={ InputValue }
            onChange={ onInputChange }
        />
    </form>
    
  )
}


AgregarCategoria.propTypes = {
  onNewCategory: PropTypes.func.isRequired
}
