import Paginacion from "../componentes/paginacion/paginacion.componente";
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

export const buscarPersonajesAPIPaginacion = async (params?: string): Promise<dataObject> =>{
return fetch(`https://rickandmortyapi.com/api/character/${params}`)
   .then(handleErrors)
    .then(data => data.json())
}