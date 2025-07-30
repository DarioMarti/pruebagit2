
import { Pelicula } from "./componentes/pelicula";
import { hacerPeticion } from "./customs/PeticionApi";
import { useModifyFilm } from "./customs/ModificarPelicula";
import { useEffect, useRef, useContext } from "react";
import { useBuscarPelicula } from "./customs/buscarPelicula";
import { filmContext } from "./contexto/PeliculaContexto";
function App() {

const {modificarPelicula, pelicula} = useModifyFilm();
const {buscar} = useBuscarPelicula()

const inputRef = useRef();
const {lista, setLista, resultados, setResultados} = useContext(filmContext)

useEffect(()=>{
  const fetchData = async()=>{
    const res = await hacerPeticion()
      setLista(res)
      setResultados(res)
     }
  fetchData()
},[])

useEffect(()=>{
 if (!pelicula || pelicula.trim() === "") {
      setResultados(lista);
      return;
    }

    const encontrados = lista.filter((peli) =>
      peli.title.toLowerCase().includes(pelicula.toLowerCase())
    );
    setResultados(encontrados);
},[pelicula,lista])


  return (
    <>
    <div className="flex justify-center items-center flex-col gap-30">
    <header className=" flex flex-col gap-20 justify-center items-center mt-30 ">
      <h1 className="font-bold text-4xl text-white">Busca tu película</h1>
      <form className="flex gap-2" onSubmit={ (e=>e.preventDefault())}>
        <input ref={inputRef} onChange={modificarPelicula} placeholder="matrix, men in black..." className="bg-white rounded-lg px-4 py-4 min-w-[400px]"/>
        <button className="px-12 py-4 bg-blue-500 text-white font-bold  rounded-lg hover:bg-blue-600 cursor-pointer " >Apretar</button>
      </form>
    </header>
     <main className="flex flex-wrap gap-6 justify-center px-24">
          {resultados.length > 0 ? (
            resultados.map((peli) => (
              <Pelicula
                key={peli.id}
                title={peli.title}
                image={peli.poster_url}
                type={peli.type}
                platform={peli.source_name}
              />
            ))
          ) : (
            <p className="text-white text-xl">No se encontraron resultados</p>
          )}
        </main>
      </div>
    </>
  )
}

export default App

