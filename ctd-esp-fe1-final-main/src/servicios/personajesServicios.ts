import TarjetaPersonaje from "../componentes/personajes/tarjeta-personaje.componente";

export const buscarPersonajesAPI = async (nombre?: string, page?:number): Promise<typeof TarjetaPersonaje> =>{

        let params = "?"
        params += `page=${page}`;
        if(nombre){
            params += `&name=${nombre}`
        }

return fetch(`https://rickandmortyapi.com/api/character/${params}`)
    .then(data => data.json())
    .then(data => data.results)
}