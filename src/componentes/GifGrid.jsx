import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
import PropTypes from 'prop-types'

export const GifGrid = ( { Categoria } ) => {

    const {images, isLoading} = useFetchGifs( Categoria );

  return (
    <>
        <h3>{ Categoria }</h3>
        {
            isLoading && ( <h4>Cargando...</h4> )
        }
        <div className="card-grid">
            {
                images.map( ( image ) => {
                    return(
                        <GifItem
                            key={ image.id }
                            { ...image }
                        />
                    )
                })
            }
        </div>
    </>
  )
}

GifGrid.propTypes = {
    //Categoria: PropTypes.string.isRequireds,
    Categoria: PropTypes.string.isRequired

}
