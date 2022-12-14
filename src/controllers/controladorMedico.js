//Importaciones
import {capturarDatos} from '../formularios/formularioMedicos.js'

//etiquetas de control
let etiquetaNombre=document.getElementById("nombres")
let etiquetaBoton=document.getElementById("botonenvio")
let etiquetaDocumento=document.getElementById("documento")
let etiquetaEspecialidad=document.getElementById("especialidad")
let etiquetaRegistro=document.getElementById("registro")
let etiquetaCorreo=document.getElementById("correo")
let etiquetaSede=document.getElementById("sede")
let etiquetaHora=document.getElementById("hora")
let etiquetaDescripcion=document.getElementById("descripcion")
let etiquetaFotografia=document.getElementById("fotografia")



//detectar el evento clic

etiquetaBoton.addEventListener("click",function(evento){
    evento.preventDefault()
   
   capturarDatos(etiquetaNombre,etiquetaDocumento,etiquetaEspecialidad,etiquetaRegistro,etiquetaCorreo,etiquetaSede,etiquetaHora,etiquetaDescripcion,etiquetaFotografia)
})