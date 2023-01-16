//Importaciones
import {capturarDatos1} from '../formularios/formularioPaciente.js'

//etiquetas de control
let etiquetaNombre1=document.getElementById("nombre1")
let etiquetaIdentificacion1=document.getElementById("identificacion1")
let etiquetaTelefeno1=document.getElementById("telefono1")
let etiquetaCuota1=document.getElementById("cuota1")
let etiquetaCorreo1=document.getElementById("correo1")
let etiquetaRegimen1=document.getElementById("regimen1")
let etiquetaGrupoIngreso1=document.getElementById("grupoingreso1")
let etiquetaEnviar1=document.getElementById("enviar1")



//detectar el evento clic

etiquetaEnviar1.addEventListener("click",function(evento){
    evento.preventDefault()
   
   capturarDatos1(etiquetaNombre1,etiquetaIdentificacion1,etiquetaTelefeno1,etiquetaCuota1,etiquetaCorreo1,etiquetaRegimen1,etiquetaGrupoIngreso1)
})