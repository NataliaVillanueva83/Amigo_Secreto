// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

//Desarrolla una función, que permita al usuario ingresar un nombre en el campo de texto y añadirlo a la lista de amigos creada anteriormente.
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim(); // Eliminar espacios en blanco

    if (nombre === "") {
        alert("Por favor, inserte un nombre."); // Validación
        return; // Salir de la función si el campo está vacío
    }

    amigos.push(nombre); // Agregar al array
    actualizarLista(); // Mostrar en la lista
    input.value = ""; // Limpiar el campo de entrada
}
// Función para actualizar la lista en el HTML
function actualizarLista() {
    let lista = document.getElementById("listaAmigos"); // Seleccionar la lista
    lista.innerHTML = ""; // Limpiar la lista antes de agregar nuevos elementos

    for (let i = 0; i < amigos.length; i++) { 
        let li = document.createElement("li"); // Crear un nuevo elemento <li>
        li.textContent = amigos[i]; // Asignar el nombre del amigo al <li>
        lista.appendChild(li); // Agregar el <li> a la lista
    }
}


// Función para sortear amigo secreto
function sortearAmigo() {
    let resultado = document.getElementById("resultado"); // Seleccionar el elemento donde se mostrará el resultado
    resultado.innerHTML = ""; // Limpiar contenido anterior

    if (amigos.length === 0) {
        resultado.innerHTML = "<p>No hay amigos en la lista para sortear.</p>";
        return; // Detener la función si el array está vacío
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length); // Generar un índice aleatorio
    let amigoSorteado = amigos[indiceAleatorio]; // Obtener el nombre usando el índice

    resultado.innerHTML = `<p>🎉 Amigo sorteado: <strong>${amigoSorteado}</strong></p>`; // Mostrar el resultado
}