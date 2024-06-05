import {  barcelona, roma, paris, londres } from './ciudades.js'

// obtener los elementos de la base

let $enlaces = document.querySelectorAll('a')
let $titulo = document.getElementById('titulo')
let $subtitulo = document.getElementById('subtitulo')
let $parrafo = document.getElementById('parrafo')
let $precio = document.getElementById('precio')

//AGREGAR UN EVENTO CLICK A CADA ENLACE
$enlaces.forEach(function(enlace) {
    enlace.addEventListener('click', function () {
        $enlaces.forEach(function (enlace) {
            enlace.classList.remove('active')
        })

        //agregar activo al que corresponda
        this.classList.add('active')
        //traer la informacion del objeto correspondiente a la eleccion
        let contenido = obtenerContenido(this.textContent)
        //mostrar el contenido en el dom
        $titulo.innerHTML = contenido.titulo
        $subtitulo.innerHTML = contenido.subtitulo
        $parrafo.innerHTML = contenido.parrafo
        $precio.innerHTML = contenido.precio

        
    })
    }
);

//Funcion para traer la informacion correcta desde ciudades.js
function obtenerContenido(enlace) {
    let contenido ={
        'Barcelona' : barcelona,
        'Roma' : roma,
        'París' : paris,
        'Londres' : londres
    }
    return contenido[enlace]
}