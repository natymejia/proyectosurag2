//creamos una función que nos permita recibir los datos del formulario
import {validarFormulario} from './validacionFormularioMedicos.js'
export function capturarDatos(etiquetaNombre,etiquetaDocumento,etiquetaEspecialidad,etiquetaRegistro,etiquetaCorreo,etiquetaSede,etiquetaHora,etiquetaDescripcion,etiquetaFotografia){

let nombresMedico=etiquetaNombre.value
let documentoMedico=etiquetaDocumento.value
let especialidadMedico=etiquetaEspecialidad.value
let registroMedico=etiquetaRegistro.value
let correoMedico=etiquetaCorreo.value
let sedeMedico=etiquetaSede.value
let horaMedico=etiquetaHora.value
let descripcionMedico=etiquetaDescripcion.value
let fotografiaMedico=etiquetaFotografia.value

//debemos almacenar todos los valores del formularion en una sola variable
//en una sola variable
//objeto= almacenar varios datos en 1 solo espacio de memoria

let datosFormularioMedico={
    nombre:nombresMedico,
    documento:documentoMedico,
    especialidad:especialidadMedico,
    registro:registroMedico,
    correo:correoMedico,
    sede:sedeMedico,
    hora:horaMedico,
    descripcion:descripcionMedico,
    fotografia:fotografiaMedico,
}
validarFormulario(datosFormularioMedico)

}