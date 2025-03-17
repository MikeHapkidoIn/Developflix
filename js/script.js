import peliculas from './peliculas.js'

function mostrarPeliculas (contenedorID, generoID) {
  const contenedor = document.getElementById(contenedorID)
  const peliculasGenero = peliculas.filter(pelicula => pelicula.genre_ids.includes(generoID))
  
  peliculasGenero.forEach(pelicula => {
    // const peliDiv = document.createElement("div")
    // const titulo = document.createElement("h2")
  
    // titulo.textContent = pelicula.title
  
    // const imagen = document.reateElement("img")
    // imagen.src = `https://image.tmdb.org/t/p/w200${pelicula.poster_path}`
    // imagen.alt = `Pelicula: ${pelicula.title}`
  
    // peliDiv.appendChild(imagen)
    // peliDiv.appendChild(titulo)
  
    // contenedor.appendChild(peliDiv)
    contenedor.innerHTML += template(pelicula.poster_path, pelicula.title)
  })
}

function template (imagen, titulo) {
  return `
      <div class="pelicula">
        <img src=https://image.tmdb.org/t/p/w200${imagen} alt=${titulo}/>
        <h2>${titulo}</h2>
      </div>
    `
}

const generos = [28, 53, 12]

generos.forEach(elemento => {
  mostrarPeliculas(`genero-${elemento}`, elemento)
})












// capturar cada uno de los contenedores
// Poner dentro cada peli filtrada -> imagen/texto

//filtrar pelis. condicional o filter
//recorrer todas las películas

//con creación de nodos o con un literal string













/*import peliculas from "./peliculas.js"




// PRIMER PASO : Capturar cada  uno de los contenedores

function mostrarPeliculas ( contenedorID, generoID){
    const contenedor = document.getElementById ( "genero-28")
    const peliculasGenero = peliculas.filter(pelicula => pelicula.genre_ids.includes(generoID))



//dond pone pelicula significa que se puede poner el nombre que nos de la gana, como si le llamamos pepito.Luego clasificamos 
//ese nombre (pelicula) por .gener_ids.includes(28) para clasificarlas por el genero 28
peliculasGenero.forEach(pelicula=> {
    const peliDiv = document.createElement("div")
    const titulo = document.createElement ("h2")

    titulo.textContent = pelicula.title
// al poner el punto antes de title, se despliega una ventana con todas las opciones establecidas en el otro JS

    
    const imagen = document.createElement("img")
    imagen.src = `https://image.tmdb.org/t/p/w200"${pelicula.poster_path}`
    imagen.alt = `pelicula: ${pelicula.title}`

 //agen.src = "https://image.tmdb.org/t/p/w200" + pelicula.poster_path esto es lo mismo que el puesto arriba

    peliDiv.appendChild(imagen)
    peliDiv.appendChild(titulo)

    contenedor.appendChild(peliDiv)


 })
}


mostrarPeliculas("genero-28", 28)
mostrarPeliculas("genero-53", 53)
mostrarPeliculas("genero-12", 12)
// PONER DENTRO CADA PELI FILTRADA -> IMAGEN/TEXTO

// FILTRAR PELIS CON CONDICIONAL O FILTER
//RECORRER TODAS LAS PELICULAS

//CON CREACION DE NODOS O UN LITERAL STRING*/


























