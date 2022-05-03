import Personaje from "./personaje";

interface Locacion {
    id : number,
    name: string,
    type:	string,
    dimension:	string,
    residents:	Personaje[],
    url:	string,
    created:	string
}

export default Locacion;