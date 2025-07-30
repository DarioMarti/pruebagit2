import { useState } from "react";

export function useModifyFilm(){
    const [pelicula, setPelicula] = useState("")

const modificarPelicula= (e)=>{
    const newPeli = e.target.value;
    setPelicula(newPeli)
}
return {modificarPelicula, pelicula}
}