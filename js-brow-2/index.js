// // DECLARANDO VARIABLES
let input = document.getElementById("input");
let boton = document.getElementById("boton");
let formulario = document.getElementById("formulario");
let listaTareas = document.getElementById("listaTareas");
let totalTareas = document.getElementById("totalTareas");
let tareasRealizadas = document.getElementById("tareasRealizadas");
let btnBorrarTachadas = document.getElementById("btnBorrarTachadas");
let borrarTodo = document.getElementById('borrarTodo');
let fecha = document.getElementById("fecha");

// // FECHA
const fechaActual = new Date();

fecha.textContent = fechaActual.toDateString();

//MANEJO DEL FORMULARIO
formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    const tarea = input.value.trim();

    if (tarea !== ""){ 

// CREAR ELEM LISTA (<li>) Y AGREGA TAREA COMO TEXTO
    const nuevaTarea = document.createElement('li');
    nuevaTarea.textContent = tarea;

//CREACIÓN DE BOTON ELIMINAR TAREA REALIZADA 
const checkboxRealizada = document.createElement('input');
checkboxRealizada.type ='checkbox';
checkboxRealizada.addEventListener('change', function () {
    nuevaTarea.classList.toggle('realizada');
    actualizarContador();
});
//CREAR BOTON PARA BORRAR LA TAREA
const btnBorrar = document.createElement('button');
btnBorrar.textContent = 'Borrar';
btnBorrar.addEventListener('click', function (){
    listaTareas.removeChild(nuevaTarea);
    actualizarContador();
})
// AGREGAR BOTONES A LA TAREA
nuevaTarea.appendChild(checkboxRealizada);
nuevaTarea.appendChild(btnBorrar);

//AGREGAR NUEVA TAREA A LISTA (<li>)
listaTareas.appendChild(nuevaTarea);

// ACTUALIZAR CONTADOR 
actualizarContador();

// ESPACIO VACIO EN INPUT
input.value = "";
}
else {
    "Debe escribir una tarea"
}
});
// FUNCTION ACTUALIZAR CONTADOR TAREAS
function actualizarContador() {
    const tareasRealizadasTachadas = document.querySelectorAll('.realizada');
    totalTareas.textContent = listaTareas.children.length;
    tareasRealizadas.textContent = tareasRealizadasTachadas.length;
}
//AGREGAR EVENT A BOTON PARA ELIMINAR TAREAS TACHADAS
btnBorrarTachadas.addEventListener('click', function (){
 const tareasRealizadas = document.querySelectorAll('.realizada');
 tareasRealizadas.forEach(function(tarea){
    listaTareas.removeChild(tarea);
 })  
 actualizarContador()
});
// AGREGAR EVENT PARA BORRAR TODO
borrarTodo.addEventListener('click', function(){
  listaTareas.textContent ="";  
    actualizarContador()
});