
export const Pelicula = ({title, year, type, platform, image})=>{
    return(
        <div className="w-[400px] min-h-[500px] flex items-center flex-col text-white ">
            <img className="w-full" src={image}/>
            <h3 className="text-2xl font-bold py-2">{title}</h3>
            <p><strong>Tipo: </strong>{type}</p>
            <p><strong>Plataforma: </strong>{platform}</p>
        </div>
    )
}

/*
  <img src={image}/>
            <h3>{title}</h3>
            <p>{year}</p>
            <p>{type}</p>
            <p>{platform}</p> */