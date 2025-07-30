
import { Pelicula } from "./componentes/pelicula";
import { hacerPeticion } from "./customs/PeticionApi";
import { useModifyFilm } from "./customs/ModificarPelicula";
import { useEffect, useState } from "react";

function App() {

const {modificarPelicula, pelicula} = useModifyFilm();
const [lista, setLista] = useState([]);
const [buscado, setBuscado] = useState(false)

useEffect(()=>{
  const fetchData = async()=>{
    const res = await hacerPeticion()
      setLista(res)
     }
  fetchData()
},[])


const mapeo = lista.map(peli=>{
 return(
   <Pelicula key={peli.id} title={peli.title} image={peli.poster_url} type={peli.type} platform={peli.source_name}/>
 )
})


const buscarPelicula=()=>{
  const existe = lista.some(peli => 
  peli.title.includes(Pelicula)
);
  setBuscado(!buscado)
  console.log(existe)
  return (
    
   <Pelicula key={existe.id} title={existe.title} image={existe.poster_url} type={existe.type}/>
  )
}


  console.log(pelicula)
  return (
    <>
    <div className="flex justify-center items-center flex-col gap-30">
    <header className=" flex flex-col gap-20 justify-center items-center mt-30 ">
      <h1 className="font-bold text-4xl text-white">Busca tu película</h1>
      <form className="flex gap-2" onSubmit={buscarPelicula}>
        <input onChange={modificarPelicula} placeholder="matrix, men in black..." className="bg-white rounded-lg px-4 py-4 min-w-[400px]"/>
        <button className="px-12 py-4 bg-blue-500 text-white font-bold  rounded-lg hover:bg-blue-600 cursor-pointer " >Apretar</button>
      </form>
    </header>
      <main className="flex flex-wrap  gap-6 justify-center px-24">
         {!buscado?mapeo:buscarPelicula()}
      </main>
      </div>
    </>
  )
}

export default App

