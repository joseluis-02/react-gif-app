export const getGifs = async( Categoria ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=ut8PbB31GyWwqauq8LFUSYXYJDDsdYZO&q=${ Categoria }&limit=10`;
    const resp = await fetch( url );
   // console.log( resp );
   const { data } = await resp.json();

   const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
   }))
   //console.log( gifs );
   return gifs;
}