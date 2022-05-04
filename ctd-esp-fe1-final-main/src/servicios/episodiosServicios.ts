import TarjetaEpisodio from "../componentes/episodios/tarjeta-episodio.componente";
import Episodio from "../types/episodio";



const buscarEpisodiosAPI = async (ids?: string[]): Promise<Episodio[]> =>{

    let params = ""
    if(ids){
        params += `${ids}`
    }

   function handleErrors(response?:any){
    if(!response.ok)
    {
        throw Error(response.status)
    }
    return response;
}
/*
Available parameters:

name: filter by the given name.
episode: filter by the given episode code.
*/ 
return fetch(`https://rickandmortyapi.com/api/episode/${params}`)
.then(handleErrors)    
.then(data => data.json())
}


const buscarEpisodioAPI = async (ids?: string[]): Promise<Episodio> =>{
    let params = ""
    if(ids){
        params += `${ids[0]}`
    }

   function handleErrors(response?:any){
    if(!response.ok)
    {
        throw Error(response.status)
    }
    return response;
   } 
return fetch(`https://rickandmortyapi.com/api/episode/${params}`)
.then(handleErrors)    
.then(data => data.json())
}


export {buscarEpisodioAPI,buscarEpisodiosAPI}