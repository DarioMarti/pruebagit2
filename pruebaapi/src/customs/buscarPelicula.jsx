

export function useBuscarPelicula(pelicula, setResultados, lista){
       
    const buscar =(e)=>{
        e.preventDefault()
        if (!pelicula || pelicula.trim() === "") {
            setResultados(lista);
            return;
        }
        const encontrados = lista.filter((peli) => peli.title.toLowerCase().includes(pelicula.toLowerCase()));
        setResultados(encontrados);
       
    }   
     return{buscar}
}