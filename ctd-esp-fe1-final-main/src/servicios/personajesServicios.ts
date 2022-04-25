import TarjetaPersonaje from "../componentes/personajes/tarjeta-personaje.componente";

export const buscarPersonajesAPI = async (nombre?: string): Promise<typeof TarjetaPersonaje> =>{

        let params = "?"
        if(nombre){
            params += `name=${nombre}`
        }

return fetch(`https://rickandmortyapi.com/api/character/${params}`)
    .then(data => data.json())
    .then(data => data.results)
}