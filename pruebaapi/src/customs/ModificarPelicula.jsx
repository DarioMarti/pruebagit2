import { useState } from "react";

export function useModifyFilm(){
    const [pelicula, setPelicula] = useState("")

const modificarPelicula= (e)=>{
    e.preventDefault()
    const newPeli = e.target.value;
    setPelicula(newPeli)
}
return {modificarPelicula, pelicula}
}