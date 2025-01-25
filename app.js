// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

/*
    Que necesito hacer 
    SI el nombre es Vacio no debe agregarse
    1 Nesecito capturar cada nombre de cada amigo y almacenarlo en un array
    2 Cuando se presion el boton sortear amigo recorra ese array de nombres y seleccione uno
    3 que al sortear no se repita
    4 que alcene los datos hasta que sea una nuevo sorteo    
*/

// Arreglo para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById('amigo'); // Campo de texto
    const nombre = input.value.trim(); // Obtener valor y eliminar espacios en blanco

    if (nombre === '') {
        alert('Por favor, ingrese un nombre válido.');
        return;
    }

    if (amigos.includes(nombre)) {
        alert('El nombre ya está en la lista.');
        return;
    }

    amigos.push(nombre); // Agregar el nombre a la lista
    input.value = ''; // Limpiar el campo de texto
    mostrarLista(); // Actualizar la lista de nombres
}

// Función para mostrar la lista de amigos
function mostrarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpiar la lista antes de actualizarla

    amigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para realizar el sorteo y seleccionar un ganador
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Debe haber al menos 2 participantes para realizar el sorteo.');
        return;
    }

    // Seleccionar un ganador aleatorio
    const ganadorIndex = Math.floor(Math.random() * amigos.length);
    const ganador = amigos[ganadorIndex];

    mostrarGanador(ganador);
}

// Función para mostrar el ganador
function mostrarGanador(ganador) {
    const resultadoLista = document.getElementById('resultado');
    resultadoLista.innerHTML = ''; // Limpiar resultados anteriores

    const li = document.createElement('li');
    li.textContent = `🎉 ¡El ganador es ${ganador}! 🎉`;
    resultadoLista.appendChild(li);
}
