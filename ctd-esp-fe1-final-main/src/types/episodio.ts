import Personaje from "./personaje";

interface Episodio {
    id : number,
    name : string,
    air_date : string,
    code :	string,
    characters : Personaje[],
    url :	string,
    created	: string

}

export default Episodio;