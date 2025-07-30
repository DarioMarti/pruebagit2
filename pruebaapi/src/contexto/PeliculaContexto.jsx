import { createContext,useState } from "react"

export const filmContext = createContext()

export const PeliculaContexto=({children})=>{
const [lista, setLista] = useState([]);
const [resultados, setResultados] = useState([]);

    return(
        <filmContext.Provider value={{lista,setLista,resultados,setResultados}}>
            {children}
        </filmContext.Provider>
    )
}