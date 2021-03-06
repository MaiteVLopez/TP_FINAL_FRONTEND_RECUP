import TarjetaPersonaje from "../componentes/personajes/tarjeta-personaje.componente";
import Personaje from "../types/personaje";
interface Info {
    count:number,
    pages:number,
    next:string,
    prev:string
}
interface Resultados {
    id:number,
    name:string
    status:string,
    species:string,
    type:string,
    gender:string,
    origin:object,
    location:object,
    image:string,
    episode:string[]
}
interface dataObject {
    info: Info
    results: Resultados
}

function handleErrors(response?:any){
    if(!response.ok)
    {
        throw Error(response.status)
    }
    return response;
}

export const buscarPersonajesAPI = async (nombre?: string): Promise<dataObject> =>{

        let params = `?`
        if(nombre){
            params += `&name=${nombre}`
        }
return fetch(`https://rickandmortyapi.com/api/character/${params}`)
   .then(handleErrors)
    .then(data => data.json())
}