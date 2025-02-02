const input = document.getElementById('nuevaTarea');
const boton = document.querySelector('button');
const lista = document.getElementById('listaTareas');

function agregarTarea() {
   
    if (input.value) {
        
        //crear tarea
        let tareaNueva = document.createElement('div');
        tareaNueva.classList.add('tarea');

        //agrego texto ingresado por el usuario
        let texto = document.createElement('p');
        texto.innerText = input.value;
        tareaNueva.appendChild(texto);

        let iconos = document.createElement('div');
        iconos.classList.add('iconos');
        tareaNueva.appendChild(iconos);
           
        let completar = document.createElement('i');
        completar.classList.add('completar', 'bi', 'bi-check-circle-fill');
        iconos.append(completar);
        completar.addEventListener('click', completarTarea);

        let editar = document.createElement('i');
        editar.classList.add('bi', 'bi-pencil-fill');
        iconos.append(editar);
        editar.addEventListener('click', editarTarea);
       

        let eliminar = document.createElement('i');
        eliminar.classList.add('eliminar', 'bi', 'bi-trash3-fill');
        iconos.append(eliminar);
        eliminar.addEventListener('click', eliminarTarea);

        lista.appendChild(tareaNueva);
    } else {

            alert('Por favor ingresa una tarea.');
    }

    }

boton.addEventListener('click', agregarTarea);

function completarTarea(e) {
    let tarea = e.target.parentNode.parentNode;
    tarea.classList.toggle('completada');

}

function eliminarTarea(e) {
    let tarea = e.target.parentNode.parentNode;
    tarea.remove();
}

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        agregarTarea();
    }
})

function editarTarea(e) {
    let tarea = e.target.parentNode.parentNode;
   
 
    //abrir modal
    const modal = document.getElementById('modal');
    const input = document.getElementById('textoEditar');
    const confirmar = document.getElementById('botonEditar');
    const cancelar = document.getElementById('botonCancelar');

    input.value = tarea.children[0].innerText;
    modal.style.display = 'flex';

    confirmar.addEventListener('click', confirmarFunction);
    cancelar.addEventListener('click', cancelarFunction);

    function confirmarFunction() {
        console.log("confirmar");
        tarea.children[0].innerText = input.value;
        modal.style.display = 'none';
    } 
    function cancelarFunction() {
        modal.style.display = 'none';
    }
}

 