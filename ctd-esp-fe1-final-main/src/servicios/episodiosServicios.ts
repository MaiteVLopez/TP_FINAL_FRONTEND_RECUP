import TarjetaEpisodio from "../componentes/episodios/tarjeta-episodio.componente";

export const buscarEpisodiosAPI = async (urlEpisodio?: string): Promise<typeof TarjetaEpisodio> =>{

    return fetch(`${urlEpisodio}`)
    .then(data => data.json())
    .then(data => data.results)
}

