import TarjetaEpisodio from "../componentes/episodios/tarjeta-episodio.componente";

export const buscarEpisodiosAPI = async (ids?: string, page?: number): Promise<typeof TarjetaEpisodio> =>{

    let params = ""
    if(ids){
        params += `${ids}`
    }
    if(page){
        params += "?"
        params += `page=${page}`;
    }

    
/*
Available parameters:

name: filter by the given name.
episode: filter by the given episode code.
*/ 
return fetch(`https://rickandmortyapi.com/api/episodios/${params}`)
    .then(data => data.json())
    .then(data => data.results)
}