
import Locacion from "./locacion";

interface Personaje {
    id : number,
    name: string,
    status: string,
    type:	string,
    gender:	string,
    origin: Locacion,
    location: Locacion,
    image: string,
    episode: string[],
    species: string,
    url:	string,
    created:	string
}

export default Personaje;