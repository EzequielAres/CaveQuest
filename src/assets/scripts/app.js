'use strict'

const li = document.querySelectorAll('.list');
const bloque = document.querySelectorAll('.contenedorTabs_contenedorPestañas_bloque');


// CLICK en li, todos .li quitar clase activo (igual con bloques) y añadir la clase activo al correspondiente

// Recorrer todos los li
li.forEach( (elemento, i) => {

    // Asignar evento a cada li
    li[i].addEventListener('click', () => {

        // Recorrer li para quitar la clase activo a los li y bloques
        li.forEach( (elemento, i)=> {
            li[i].classList.remove('activo');
            bloque[i].classList.remove('activo');
        })

        // Añadir la clase activo al li y bloque seleccionado
        li[i].classList.add('activo');
        bloque[i].classList.add('activo');
    })
})