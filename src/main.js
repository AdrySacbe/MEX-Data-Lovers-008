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

function showMenu() {
  if (opciones.classList.contains("disabled-menu")){
   opciones.classList.remove("disabled-menu");
   opciones.classList.add("enabled-menu")
 }
 else{
   opciones.classList.remove("enabled-menu");
   opciones.classList.add("disabled-menu")
 }

}

hamburguesa.addEventListener("click",showMenu);




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
let imprimir = () => {
  //llamar section donde se imprime la data
  let mostrar = document.getElementById('mostrando_lista_pokemones');
  mostrar.innerHTML = '';
  let template='';
for(let pokemon of POKEMON.pokemon){
  //mostrar.innerHTML += `<ul><li>
  template +=`<li>
  <img src="${pokemon.img}">
  <p><strong>Nombre:</strong> ${pokemon.name}</p>
  <p><strong>Tipo:</strong>${pokemon.type}</p>
  <p><strong>Altura:</strong>${pokemon.height}</p>
  <p><strong>Peso:</strong>${pokemon.weight}</p>
  <p><strong>Candy:</strong>${pokemon.candy}</p>
  <p><strong>Candy_count:</strong>${pokemon.candy_count}</p>
  <p><strong>Egg:</strong>${pokemon.egg}</p>
  <p><strong>spawn_chance:</strong>${pokemon.spawn_chance}</p>
  <p><strong>avg_spawns:</strong>${pokemon.avg_spawns}</p>
  <p><strong>spawn_time:</strong>${pokemon.spawn_time}</p>
  <p><strong>weaknesses:</strong>${pokemon.weaknesses}</p>
  <p><strong>multipliers:</strong>${pokemon.multipliers}</p>
  </li> `
}
mostrar.innerHTML=`<ul>${template}</ul>`
}
imprimir();

//----------------------------------------------------------------
//Función para filtrar

//const filter = document.getElementById("filter");

//function loadEventListeners() {
//filter.addEventListener('keyup', filterTasks);
//}

// // Filter Tasks
// function filterTasks(e) {
//   const text = e.target.value.toLowerCase();

//   document.querySelectorAll('.collection-item').forEach(function(task){
//     const item = task.firstChild.textContent;
//     if(item.toLowerCase().indexOf(text) != -1){
//       task.style.display = 'block';
//     } else {
//       task.style.display = 'none';
//     }
//   });
// }