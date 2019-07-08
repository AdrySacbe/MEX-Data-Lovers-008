//Manipulating with DOM

//Seleccionando a los elementos del HTML con ayuda de su Id.
const firstButton = document.getElementById("siguiente");
const buttonAtras = document.getElementById("atras");
const opciones = document.getElementById("opciones")
const name = document.getElementById("name");
const img = document.getElementById("img");
const type = document.getElementById("type");
const height = document.getElementById("height");
const weight= document.getElementById("weight");
const candy =  document.getElementById("candy");
const candy_count = document.getElementById("candy_count");
const egg = document.getElementById("egg");
const spawn_chance = document.getElementById("spawn_chance");
const avg_spawns = document.getElementById("avg_spawns");
const spawn_time = document.getElementById("spawn_time");
const multipliers = document.getElementById("multipliers");
const weaknesses = document.getElementById("weaknesses");
const next_evolution = document.getElementById("next_evolution");
let contador = 0;






// Funciones puras 
// Esta función sirve para que al darle click a un botón pueda mostar a los pokemones de uno en uno. El contador avanza en 1 por cada click.
const showOnexOne = () => {
  name.innerHTML = "nombre:" + " " + window.pikachu.pokemon[contador].name;
  img.src = window.pikachu.pokemon[contador].img;
  contador=contador+1;
}

// Esta función sirve para que al darle click a un botón "atrás" pueda mostar a los pokemones de uno en uno pero en reversa. El contador disminuye en 1 por cada click.
const showOnexOneReverse = () => {
  name.innerHTML = "nombre:" + " " + window.pikachu.pokemon[contador].name;
  img.src = window.pikachu.pokemon[contador].img;
  contador=contador-1;
}


//Llamando a las funciones
firstButton.addEventListener("click", showOnexOne);
buttonAtras.addEventListener("click", showOnexOneReverse);

//--------------------------------------------------------
// funcion que imprime toda la data en la section1
const imprimir = () => {
  //llamar section donde se imprime la data
  const mostrar = document.getElementById('mostrando_lista_pokemones');
  mostrar.innerHTML = '';
  let template='';
for(let pokemon of POKEMON.pokemon){
  //mostrar.innerHTML += `<ul><li>
  template +=`<li>
  <img src="${pokemon.img}">
  <p><strong>Nombre:</strong> ${pokemon.name}</p>
  <p><strong>Tipo:</strong>${pokemon.type}</p>
  <p><strong>Candy:</strong>${pokemon.candy}</p>
  </li> `
}
mostrar.innerHTML=`<ul>${template}</ul>`
}
imprimir();

//----------------------------------------------------------------
//Función para filtrar






// Aca van las funciones que trabajan con el DOM
const allPokemon = window.pikachu.pokemon; 
let currentPokemon = allPokemon; // ESTA VARIABLE CONTENDRÁ TODOS LOS POKEMON QUE SE ESTAN VIENDO AL MOMENTO DE FILTRAR U ORDENAR O REALIZAR CUALQUIER MODIFICACIÓN A TODOS LOS POKEMON. SE INICIALIZA CON TODOS LOS POKEMON.

//armar caja de pokemones según los boostrap card https://getbootstrap.com/docs/4.2/components/card/
let pokemonBox = (name, number, type, image) => {
    let typesFormated = formatTypes (type);
    return `<div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
    <div class="card w-100 pokemon-box">
    <div  class="card-img-top">
    <img class="img-fluid" src="${image}" alt="${name}">
    </div>
    <div class="card-body">
    <p class="card-text">#${number}</p>
    <p class="card-text">${name}</p>
    <p class="card-text">${typesFormated}</p>
    </div>
    </div>
    </div>`;
}

//Se crea una función formaType que separa los tipos por la coma y los convierte en array y esto lo hace el split y esto hace que sean elementos independientes
let formatTypes = (types) => {
    let typesHtml = "";
    for (let i = 0; i < types.length; i++){
        //span sirve para aplicar estilo a un texto https://developer.mozilla.org/es/docs/Web/HTML/Elemento/span, hace que quede al lado los elementos
        typesHtml += `<div class="tag-type bg-${types[i].toLowerCase()}">${types[i]}</div>`;
    }
    return typesHtml;
}

// simplemente le pasas un array de pokemones y llena con html de las cajas con la funcion pokemonBox
let fillWithPokemons = (pokemons) => {
    // Limpiamos el html que haya dentro del div con id root. esto se hace para poder mostrar los nuevos pokemones.
    document.getElementById("root").innerHTML = "";
    for (let i = 0; i < pokemons.length; i++){
        document.getElementById("root").innerHTML += pokemonBox(pokemons[i].name, pokemons[i].num, pokemons[i].type, pokemons[i].img);
    }
}

// addEventListener click para todos los botones de tipos de pokemon
let clicksButtonType = (idTypePokemon) => {
    // querySelectorAll trae un array de todos los elementos con el id que se le indique para poder recorer con un for despues
    let buttonType = document.querySelectorAll("#"+idTypePokemon);
    for (let i = 0; i < buttonType.length; i++) {
        buttonType[i].addEventListener("click", () => {
            // llamamos a la funcion window.pokemons.filterByType que hace el trabajo de filtrarlos por tipo, pasandole a la funcion las variables allPokemon, que son todos los pokemones. Y idTypePokemon que es el tipo de pokemon (el id del boton).
            // Guardamos lo que nos devuelve la funcion window.pokemons.filterByType en la variable currentPokemon (global) que contiene los pokemones filtrados u ordenados.
            currentPokemon = window.window.pokemons.filterByType(allPokemon, idTypePokemon);

            // Actualizamos el titulo del tipo de pokemon que estamos viendo o que vamos a ver.
            document.getElementById("name-type").innerHTML = document.getElementById(idTypePokemon).value;

            // Llamamos a la funcion fillWithPokemons y le pasamos currentPokemon que contiene los pokemones filtrados arriba.
            fillWithPokemons(currentPokemon);
        })
    }

}
// addEventListener click para todos los botones de tipos de pokemon
let clicksButtonType2 = (idTypePokemon) => {
    // querySelectorAll trae un array de todos los elementos con el id que se le indique para poder recorer con un for despues
    let buttonType = document.querySelectorAll("#"+idTypePokemon+"2");
    for (let i = 0; i < buttonType.length; i++) {
        buttonType[i].addEventListener("click", () => {
            // llamamos a la funcion window.pokemons.filterByType que hace el trabajo de filtrarlos por tipo, pasandole a la funcion las variables allPokemon, que son todos los pokemones. Y idTypePokemon que es el tipo de pokemon (el id del boton).
            // Guardamos lo que nos devuelve la funcion window.pokemons.filterByType en la variable currentPokemon (global) que contiene los pokemones filtrados u ordenados.
            currentPokemon = window.window.pokemons.filterByType(allPokemon, idTypePokemon);

            // Actualizamos el titulo del tipo de pokemon que estamos viendo o que vamos a ver.
            document.getElementById("name-type").innerHTML = document.getElementById(idTypePokemon).value;

            // Llamamos a la funcion fillWithPokemons y le pasamos currentPokemon que contiene los pokemones filtrados arriba.
            fillWithPokemons(currentPokemon);
        })
    }

}
// Se ejecuta clicksButtonType por cada uno de los tipos de pokemon (con un for) que en este caso estan como button.
let buttonArray = ["Grass", "Poison", "Flying", "Fire", "Water", "Bug", "Normal", "Electric", "Ground", "Fighting", "Psychic", "Rock", "Ice", "Ghost", "Dragon"];
for (let i = 0; i < buttonArray.length; i++){
    clicksButtonType(buttonArray[i]);
    clicksButtonType2(buttonArray[i]);
}
